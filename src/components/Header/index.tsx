import Link from "next/link";
import Input from "../ui/input";
import { LuSearch } from "react-icons/lu";

export default function Header(){
    return(
        <header className="px-16 sticky top-0 z-50 w-full border-b border-white/10 bg-[#121417]/95 ">
            <div className="flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-md bg-linear-to-br from-[#5593f7] to-[#121417] 
                    flex items-center justify-center">
                        <span className="text-white font-bold text-lg"> S </span>
                    </div>

                    <span className="text-white text-xl font-bold">
                        Store 
                    </span>
                </Link>

                <div className="hidden md:flex flex-1 max-w-md mx-8">
                    <div className="relative w-full">
                        <Input className="pl-10 text-white placeholder:text-gray-400" placeholder="Buscar produtos..."/>
                        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
                    </div>
                </div>

                <div className="flex items-center space-x-4"></div>
            </div>
        </header>
    )
}