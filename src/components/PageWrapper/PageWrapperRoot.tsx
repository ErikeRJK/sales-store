import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface PageWrapperRootProps {
    children: React.ReactNode
    privatePage?: boolean
}

export default function PageWrapperRoot({ children, privatePage = false }: PageWrapperRootProps) {
    const { isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(privatePage && !isAuthenticated){
            router.push("/login")
        }
    }, [])

    return(
        <div className="min-h-screen bg-[#111418] flex">
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}