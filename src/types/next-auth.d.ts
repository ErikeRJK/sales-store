import NextAuth, {DefaultSession} from "next-auth";

declare module "next-auth" {
    interface Session {
        accessToken?: string;
        user: {
            id: string
        } & DefaultSession["user"]
    }

    interface User {
        id: string
        email: string
        name: string
        token: string
        image?: string 

    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: strings
        id?: string
    }
}