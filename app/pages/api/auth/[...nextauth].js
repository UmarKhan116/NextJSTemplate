import NextAuth from "next-auth/next";

import GithubProvider from "next-auth/providers/github";


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: "361804150d321d31cda0",
            clientSecret: "371f693dc01915763dc8b2c23f8d196ffe1d9181",
        }),
    ],
};
export default NextAuth(authOptions);