import Header from "@/components/Header";
import Input from "@/components/ui/input";
import requestApi from "@/helpers/requestApi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home(){
  const router = useRouter()
  const { data: session } = useSession()

  async function getProfile(){
    try {
      await requestApi({
        url: "/profile",
        method: "GET"
      })
    } catch (error) {
      localStorage.removeItem("token")
      router.push("/login")
    }
  }
  
  useEffect(() => {
    if(!session){
      router.push("/login")
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-[#121417]">
      <Header />
    </div>
  )
}