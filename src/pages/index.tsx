import Header from "@/components/Header";
import Input from "@/components/ui/input";
import requestApi from "@/helpers/requestApi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Home(){
  const router = useRouter()
  
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
    const token = localStorage.getItem("token")

    if(!token){
      router.push("/login")
    }

    getProfile()
  }, [])

  return (
    <div className="min-h-screen bg-[#121417]">
      <Header />
    </div>
  )
}