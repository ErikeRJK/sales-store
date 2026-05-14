import Image from "next/image"
import { useEffect, useState } from "react"

interface ProductImagesProps{
    images: string[]
}

export default function ProductImages({ images = [] }: ProductImagesProps) {
    const [selectedImage, setSelectedImage] = useState("")

    useEffect(() => {
        setSelectedImage(images[0])
    }, [images])

    return (
        <div className="space-y-4">
            <div className="aspect-square overflow-hidden border border-[#343942]
            rounded-2xl h-[660px]">
                <Image
                    src={selectedImage}
                    alt="Product Image"
                    width={2000}
                    height={2000}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex gap-2">
                {images.map((image, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setSelectedImage(image)}
                            className={`aspect-square w-20 overflow-hidden rounded-lg border
                                border-[#343942]
                                ${selectedImage === image && "ring-2 ring-[#5593f7]"}
                            `}
                        >
                            <Image 
                                src={image}
                                alt="Product Image"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}