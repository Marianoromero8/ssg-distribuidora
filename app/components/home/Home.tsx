"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleSlideChange = (swiper: SwiperClass) => {
        const activeVideo = videoRefs.current[swiper.activeIndex];
        if (activeVideo) {
            activeVideo.play().catch((err) => console.error("Error al reproducir:", err));
        }
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id "${sectionId}" not found.`);
        }
    }

    return (
        <div className="flex flex-col md:flex-row text-[#4166e0] gap-12 p-6 w-full">
            <div className="flex flex-col justify-center items-center w-full ml-20 p-8">
                <h1 className="text-5xl text-center leading-none">
                    <span className="block">Bienvenido a</span>
                    <span className="block font-bold">SSG Distribuidora</span>
                </h1>
                <p className="text-[#4166e0] mt-4">
                    Descubre nuestra línea de productos exclusivos con la mejor calidad y precio del mercado.
                </p>
                <div className="text-[#4166e0] mt-6 flex justify-center lg:justify-start space-x-4">
                    <Link href={'/products'}>
                        <Button className="px-6 py-2 rounded-lg" variant='ghost'>Ver Productos</Button>
                    </Link>
                    <Button onClick={() => scrollToSection('contacts')} className="px-6 py-2 rounded-lg" variant='ghost'>Contacto</Button>
                </div>
            </div>
            <div className="flex justify-center items-center w-1/2 h-[80vh]">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="w-full h-full"
                    onSlideChange={handleSlideChange}
                >
                    {["tonaditavideo.mp4", "cremaMilkaut.mp4", "conosudvideo.mp4", "baldemilkaut.mp4", "simplotvideo.mp4"].map((video, index) => (
                        <SwiperSlide key={index}>
                            <video
                                ref={(el) => { videoRefs.current[index] = el; }}
                                src={`/videos/${video}`}
                                muted
                                playsInline
                                loop
                                className="w-full h-full object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}