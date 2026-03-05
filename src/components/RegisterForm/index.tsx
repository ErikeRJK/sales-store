import { FiGithub, FiUser } from "react-icons/fi";
import CustomInput from "../CustomInput";
import { CiMail } from "react-icons/ci";
import { GoLock } from "react-icons/go";
import { FaChrome } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

export default function RegisterForm() {
    return (
        <div className="w-full max-w-md mx-auto bg-gradient-to-br
        from-[#181b20cc] to-[#1d2025e6] border
        border-[#2c313a]/50 backdrop-blur-xl shadow-[#181b1f]
        rounded-lg text-gray-400">
            <div className="p-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r
                    from-[#5593f7] to-[#1d4fd7] text-transparent
                     bg-clip-text">
                        Criar Conta
                    </h2>
                    <p>Preencha os dados para criar sua conta</p>
                </div>
                <form 
                    onSubmit={() => {}} 
                    className="space-y-6"
                >
                    <CustomInput
                        label="Nome Completo"
                        type="text"
                        placeholder="Seu nome completo"
                        icon={<FiUser />}
                        required={true} 
                    />
                    <CustomInput
                        label="Email"
                        type="email"
                        placeholder="seu@email.com"
                        icon={<CiMail />}
                        required={true} 
                    />
                    <CustomInput
                        label="Senha"
                        type="password"
                        placeholder="••••••••"
                        icon={<GoLock />}
                        required={true} 
                    />
                    <CustomInput
                        label="Confirmar Senha"
                        type="password"
                        placeholder="••••••••"
                        icon={<GoLock />}
                        required={true} 
                    />
                    <Button 
                        type="submit" 
                        variant="primary"
                        className="h-[45px]"
                    >
                        Criar Conta
                    </Button>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-[45%] h-[1px] bg-[#2c313a]"></div>
                        <p className="text-[12px] text-gray-400">OU</p>
                        <div className="w-[45%] h-[1px] bg-[#2c313a]"></div>
                    </div>

                    <div className="space-y-3">
                        <Button
                            variant="outline"
                            className="text-sm hover:bg-[#F9AF32]"
                        >
                            <FiGithub />
                            Continuar com Github
                        </Button>
                        <Button
                            variant="outline"
                            className="text-sm hover:bg-[#4487F4]"
                        >
                            <FaChrome />
                            Continuar com Google
                        </Button>
                    </div>
                    <div className="text-center mt-6 flex items-center justify-center gap-2">
                        <p className="text-sm text-gray-400">Já tem uma conta?</p>
                        <Link
                            href="/"
                            className="text-sm text-[#5593f7] hover:text-[#5593f3]/80
                             transition-colors"
                        >
                            Fazer Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}