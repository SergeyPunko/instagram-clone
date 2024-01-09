import { withAuth } from "next-auth/middleware";
import { authPathnameses } from "./lib/constants";

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      const isLoggedIn = !!token;

      const isAuthPage = authPathnameses.some((authPathname) =>
        req.nextUrl.pathname.includes(authPathname)
      );

      if (isLoggedIn || isAuthPage) return true;

      return false;
    },
  },
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.png).*)"],
};