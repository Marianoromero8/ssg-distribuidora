import Image from "next/image"

type CardProps = {
    image: string,
    productName: string,
    presentation: string,
    alt: string
}

export default function ProductCard({ image, productName, presentation }: CardProps) {
    return (
        <div className="flex flex-col bg-[#ffff] p-5 text-[##4166e0] border-2 border-[#4166e0] w-64 min-h-[350px] h-full transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div className="relative w-full h-56 rounded-lg overflow-hidden border border-[#e8decb]">
                <Image
                    src={image}
                    alt={`Imagen de ${productName}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col justify-start space-y-2">
                <h3 className="text-xl font-semibold text-[#4166e0]">{productName}</h3>
                <p className="text-sm text-[#4166e0]">{presentation}</p>
            </div>
        </div>
    )
}