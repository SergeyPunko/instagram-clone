"use server";

import prisma from "@/prisma/client";
import bcrypt from 'bcrypt';

export const register = async (body: any) => {
  const { username, email, password, name } = body;

  if (!username || email || !password) {
    return new Error('Missing username, email or password');
  }

  const isUserExist = await prisma.user.findUnique({ where: email });

  if (isUserExist) {
    return new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.user.create({
    data: {
      username,
      password: hashedPassword,
      email,
      name
    }
  })

  return newUser
}
