import { FaChevronLeft } from "react-icons/fa";
import CustomButton from "../CustomButton";

interface BreadcrumbProps {
    items: {
        title: string;
    }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps){
    return (
        <div className="flex items-center gap-2 mb-6">
            <CustomButton
                variant="ghost"
                className="w-[100px] text-sm gap-2 hover:bg-[#5593f7] h-[30px]"
            >
                <FaChevronLeft />
                Voltar
            </CustomButton>

            {items.map((item, index) => {
                return (
                    <>
                        <span className="text-gray-400">/</span>
                        <span className={`${index === items.length - 1 ? "font-medium" : "text-gray-400"}`}>
                            {item.title}
                        </span>
                    </>
                )
            })}
        </div>
    )
}