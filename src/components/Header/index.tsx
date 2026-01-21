import Link from "next/link";

export default function Header(){
    return(
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#121417]/95 ">
            <div className="px-16 flex h-16 items-center justify-between">
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

                    </div>
                </div>
            </div>
        </header>
    )
}