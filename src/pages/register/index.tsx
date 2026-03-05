import RegisterForm from "@/components/RegisterForm";

export default function Register() {    
    return (
        <div className="min-h-screen bg-[#111418] flex items-center
            justify-center relative overflow-hidden
        ">
            <div className="absolute inset-0 bg-gradient-to-br from-[#121417]
             via-[#121418] to-[#181b2033]"></div>

            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5593f70d]
              blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#5593f70d]
             blur-3xl animate-pulse delay-1000"></div>
             <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-[#21252b1a]
             blur-2xl animate-pulse delay-500"></div>

             <div className="relative z-10 w-full px-4">
                <RegisterForm />
             </div>
        </div>
    )
}