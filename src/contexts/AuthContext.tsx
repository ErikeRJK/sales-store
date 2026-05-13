import { useSession, signOut as nextSignOut } from "next-auth/react"
import { createContext, useContext } from "react"

interface User {
    id: string
    email: string
    name: string
    image?: string | null

}

interface AuthContextType {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
    signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}: {children: React.ReactNode}){
    const {data: session, status} = useSession()


    async function signOut(){
        await nextSignOut({
            redirect: true,
            callbackUrl: "/login"
        })
    }

    const value: AuthContextType = {
        user: session?.user as User,
        isAuthenticated: status === "authenticated",
        isLoading: status === "loading",
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext)

    if(!context){
        throw new Error("useAuth deve ser usado dentro de um AuthProvider")
    }

    return context
}