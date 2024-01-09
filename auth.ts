import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from 'bcrypt';
import prisma from "@/prisma/client";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth";
import {
  NextApiRequest,
  NextApiResponse,
} from "next";

export const config = {
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error("Invalid credentials")

        try {
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                {
                  email: credentials.email
                },
                {
                  username: credentials.email
                }
              ]
            },
          })
          if (!user || !user.password)
            throw new Error("Invalid credentials")

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          )
          if (!isValid) throw new Error("Invalid credentials")
          return user
        } catch (e: any) {
          throw new Error("Invalid credentials")
        }
      },
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.username = token.username;
      }

      return session;
    },
    async jwt({ token, user }) {
      const prismaUser = await prisma.user.findFirst({
        where: {
          email: token.email,
        },
      });

      if (!prismaUser) {
        token.id = user.id;
        return token;
      }
      if (!prismaUser.username) {
        await prisma.user.update({
          where: {
            id: prismaUser.id,
          },
          data: {
            username: prismaUser.name?.split(" ").join("").toLowerCase(),
          },
        });
      }

      return {
        id: prismaUser.id,
        name: prismaUser.name,
        email: prismaUser.email,
        username: prismaUser.username,
        picture: prismaUser.image,
      };
    },
  },
} as NextAuthOptions;

export default NextAuth(config);

export const auth = (
  ...args: [NextApiRequest, NextApiResponse]
) => getServerSession(...args, config);
