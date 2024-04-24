import NextAuth from "next-auth/next";
import { AuthOptions  } from "next-auth";
import GithubProvider from "next-auth/providers/github";


const authOptions: AuthOptions  = {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITHUB_SECRET_ID as string,
      })
    ],
    secret: process.env.NEXTAUTH_SECRET as string,
  };

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };