"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
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
            { threshold: 0.75 }
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
        <div className="w-full h-screen flex justify-center items-center bg-transparent my-8">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="w-full h-full"
            >
                <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <video
                        ref={(el) => { videoRefs.current[0] = el }}
                        src="/videos/tonaditavideo.mp4"
                        muted
                        autoPlay
                        playsInline
                        loop
                        className="w-full h-full object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <video
                        ref={(el) => { videoRefs.current[1] = el }}
                        src="/videos/milkautvideo.mp4"
                        muted
                        autoPlay
                        playsInline
                        loop
                        className="w-full h-full object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <video
                        ref={(el) => { videoRefs.current[2] = el }}
                        src="/videos/conosudvideo.mp4"
                        muted
                        autoPlay
                        playsInline
                        loop
                        className="w-full h-full object-contain"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
