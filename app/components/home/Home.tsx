'use client'
import { useEffect, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
    // Usamos un array de refs para cada video
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target as HTMLVideoElement;
                    if (entry.isIntersecting) {
                        video.play().catch((err) => console.error("Error al reproducir:", err));
                    } else {
                        video.pause();
                    }
                });
            },
            { threshold: 0.75 } // Ajusta el umbral según lo que consideres "visible"
        );

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => {
            videoRefs.current.forEach((video) => {
                if (video) observer.unobserve(video);
            });
        };
    }, []);

    return (
        <div className="flex flex-row justify-center items-center mt-8">
            <Carousel className="flex justify-center items-center w-full h-full">
                <CarouselContent>
                    <CarouselItem className="flex justify-center items-center snap-center max-w-[screen] mx-auto bg-white">
                        <video
                            ref={(el) => { videoRefs.current[0] = el }}
                            src="/videos/tonaditavideo.mp4"
                            width={300}
                            height={300}
                            muted
                            autoPlay
                            playsInline
                            loop
                            className=""
                        />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center snap-center max-w-[screen] mx-auto bg-white">
                        <video
                            ref={(el) => { videoRefs.current[1] = el }}
                            src="/videos/milkautvideo.mp4"
                            width={300}
                            height={300}
                            muted
                            autoPlay
                            playsInline
                            loop
                            className=""
                        />
                    </CarouselItem>
                    <CarouselItem className="flex justify-center items-center snap-center max-w-[screen] mx-auto">
                        <video
                            ref={(el) => { videoRefs.current[1] = el }}
                            src="/videos/conosudvideo.mp4"
                            width={300}
                            height={300}
                            muted
                            autoPlay
                            playsInline
                            loop
                            className=""
                        />                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-10" />
                <CarouselNext className="absolute right-10" />
            </Carousel>
        </div>
    );
}
