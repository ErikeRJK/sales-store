import { Category } from "@/interfaces/category";
import categoriesMock from "@/mocks/categories"
import { useEffect, useState } from "react";
import { VscExtensions } from "react-icons/vsc";

export default function CategorySection() {
    const [categories, setCategories] = useState<Category[]>([])
   
    useEffect(() => {
        async function fetchCategories() {
            setCategories(categoriesMock)
        }

        fetchCategories()
    }, [])

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold mb-6">
                Categorias Populares
            </h2>
            <div className="grid grid-cols-6 max-md:grid-cols-3 max-sm:grid-cols-2
             gap-4">
                {categories.map((category) => {
                    return (
                        <div 
                            key={category.id}
                            className="group rounded-lg cursor-pointer hover:shadow-md
                            transition-all duration-300 ease-in-out bg-[#2c313a]/50 backdrop-blur-sm">
                            <div className="p-6 text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="rounded-full bg-[#5593f7]/10
                                    p-4 group-hover:bg-[#5593f7]/20 transition-colors duration-300">
                                        <VscExtensions className="text-[#5593f7]" />
                                    </div>
                                </div>
                                <h3 className="font-medium text-sm mb-1">
                                    {category.name}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    {category.count} produtos
                                </p>
                            </div>
                        </div>
                    )
                })}
             </div>
        </section>
    )
}