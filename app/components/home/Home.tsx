"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleSlideChange = (swiper: any) => {
        videoRefs.current.forEach((video, index) => {
            if (video) {
                if (index === swiper.activeIndex) {
                    video.play().catch((err) => console.error("Error al reproducir:", err));
                } else {
                    video.pause();
                }
            }
        });
    };

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
                onSlideChange={handleSlideChange}
            >
                <SwiperSlide>
                    <video
                        ref={(el) => { videoRefs.current[0] = el; }}
                        src="/videos/tonaditavideo.mp4"
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <video
                        ref={(el) => { videoRefs.current[1] = el; }}
                        src="/videos/milkautvideo.mp4"
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-contain"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <video
                        ref={(el) => { videoRefs.current[2] = el; }}
                        src="/videos/conosudvideo.mp4"
                        muted
                        playsInline
                        loop
                        className="w-full h-full object-contain"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}