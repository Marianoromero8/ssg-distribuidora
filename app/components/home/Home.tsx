import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-row justify-center items-center ml-20 mr-20 mt-8 bg-[#ae2ab066]">
            <Carousel className="flex justify-center items-center" >
                <CarouselContent className="">
                    <CarouselItem className="flex justify-center items-center snap-center">
                        <Image src="/milkaut.jpeg" width={300} height={300} alt="Logo" />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center snap-center">
                        <Image src="/tiernis.jpeg" width={300} height={300} alt="Logo" />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center snap-center">
                        <Image src="/conosud.jpeg" width={300} height={300} alt="Logo" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 " />
                <CarouselNext className="absolute right-0" />
            </Carousel>
        </div>
    )
}

