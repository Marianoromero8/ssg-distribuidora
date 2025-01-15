import Image from "next/image"

type CardProps = {
    image: string,
    productName: string,
    presentation: string
}

export default function ProductCard({ image, productName, presentation }: CardProps) {
    return (
        <div className="flex flex-col pr-5 pb-5 pt-5 pl-5 text-[#f17900ec] border-2 border-[#f17900ec] rounded-lg w-64 h-fit transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            <div className="relative w-full h-56 rounded-lg overflow-hidden mb-4">
                <Image
                    src={image}
                    alt={`Imagen de ${productName}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="flex flex-col justify-start space-y-2">
                <h3 className="text-xl font-semibold text-[#f17900ec]">{productName}</h3>
                <p className="text-sm text-gray-700">{presentation}</p>
            </div>
        </div>
    )
}