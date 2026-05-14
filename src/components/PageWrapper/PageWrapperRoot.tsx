import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import AdminSidebar from "../AdminSidebar"

interface PageWrapperRootProps {
    children: React.ReactNode
    privatePage?: boolean
    sidebar?: boolean
}

export default function PageWrapperRoot({ children, privatePage = false, sidebar = false }: PageWrapperRootProps) {
    const { isAuthenticated } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(privatePage && !isAuthenticated){
            router.push("/login")
        }
    }, [])

    return(
        <div className="min-h-screen bg-[#111418] flex">
            {sidebar && <AdminSidebar/>}
            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}