import { BsArrowRight } from "react-icons/bs";
import CustomButton from "../CustomButton";

export default function BannerSection() {
    return (
        <section className="rounded-2xl bg-gradient-to-r from-[#5593f7]
         to-[#5593f7]/50 p-12">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ofertas Especiais
                </h2>
                <p className="text-white/90 text-lg mb-6">
                    Descubra produtos incríveis com até 70% de desconto. Promoções por tempo limitado!
                </p>
                <CustomButton
                    variant="outline"
                    width="w-[200px]"
                >
                    Ver Ofertas
                    <BsArrowRight />
                </CustomButton>
            </div>
        </section>
    )
 }