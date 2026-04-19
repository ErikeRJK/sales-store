import Link from "next/link";
import CustomInput from "../CustomInput";
import { IoSearch } from "react-icons/io5";
import CustomButton from "../CustomButton";
import { FiLogOut, FiShoppingCart, FiUser } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, 
    DropdownMenuGroup, DropdownMenuItem, 
    DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";
import { useEffect, useState } from "react";

interface User {
    id: string
    email: string
    name: string
    image: string | null
}

export default function Header() {
    const [user, setUser] = useState<User | null>(null)

    const router = useRouter()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || "{}") as User

        if(user){
            setUser(user)
        }
    }, [])

    function signOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")

        router.push("/login")
    }

  return (
    <header
      className="sticky top-0 z-50 bg-[#111418]/95
        backdrop-blur-sm w-full border-b border-[#2e3237]"
    >
      <div className="w-full flex h-16 items-center justify-between">
        <div className="w-[33%] pl-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-linear-to-br from-blue-500 to-blue-500/70 flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-500 to-blue-500/70 bg-clip-text text-transparent">
              store
            </span>
          </Link>
        </div>
        <div className="w-[33%] hidden md:flex flex-1 px-8 justify-center">
          <CustomInput
            type="text"
            placeholder="Buscar produtos..."
            icon={<IoSearch />}
          />
        </div>
        <div className="w-[33%] flex items-center space-x-4 justify-end pr-4">
          {user ? (
            <>
              <CustomButton
                variant="ghost"
                width="w-10"
                className="h-10 rounded-full hover:bg-[#5593f7]
                         hover:text-[#111418]"
              >
                <FiShoppingCart />
              </CustomButton>
              <CustomButton
                variant="ghost"
                width="w-10"
                className="h-10 rounded-full hover:bg-[#5593f7]
                         hover:text-[#111418]"
              >
                <FaRegBell />
              </CustomButton>
              
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt="imagem do usuário"
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <button className="w-10 h-10 rounded-full bg-linear-to-r
                      from-[#5593f7] to-[#1d47d7] flex items-center justify-center
                      text-white font-semibold">
                        {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </button>
                  )}
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  className="min-w-56 rounded-lg shadow-xl py-2"
                  sideOffset={8}
                  align="end"
                >
                  <div className="px-4 py-3 border-b border-[#2c313a]">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-r
                        from-[#5593f7] to-[#1d47d7] flex items-center justify-center
                        text-white font-semibold">
                          {user?.name?.charAt(0)?.toUpperCase() || "U"}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-white font-medium text-sm">{user?.name}</p>
                        <p className="text-gray-400 text-xs">{user?.email}</p>
                      </div>
                    </div>
                  </div>

                  <DropdownMenuGroup className="py-1">
                    <DropdownMenuItem asChild>
                      <Link
                        href={"/profile"}
                        className="flex items-center px-4 py-2 text-sm text-gray-300
                        hover:bg-[#2c313a] hover:text-white transition-colors cursor-pointer"
                      >
                        <FiUser className="mr-3 w-4 h-4"/>
                        Meu Perfil
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  
                  <DropdownMenuItem
                    onSelect={signOut}
                    className="flex items-center px-5 py-2 text-sm text-red-400
                    hover:bg-[#2c313a] hover:text-red-300 transition-colors cursor-pointer"
                  >
                    <FiLogOut className="mr-3 w-4 h-4"/>
                    Sair
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <CustomButton
            width="w-[120px]"
            className="h-8.75"
            onClick={ () => router.push("/login") }
            >ENTRAR</CustomButton>
          )}
        </div>
      </div>
    </header>
  );
}
