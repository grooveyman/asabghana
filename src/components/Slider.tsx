import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "./slider.css";
import { Navigation } from "swiper/modules";

import "swiper/css";

const data = [
    {
        image: `${import.meta.env.BASE_URL}images/2022-mercedes-benz-s500-4matic-102-1642184016.avif`,
        title: "Mercedes Benz S500 4MATIC",
    },
    {
        image: `${import.meta.env.BASE_URL}images/2021-Chevrolet-Blazer-parked-in-front-of-a-city-building_mobile.avif`,
        title: "Chevrolet Blazer",
    },
    {
        image: `${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`,
        title: "Cadillac Escalade V-Series",
    },
    {
        image: `${import.meta.env.BASE_URL}images/2022-mercedes-benz-s500-4matic-102-1642184016.avif`,
        title: "Mercedes Benz S500 4MATIC",
    },
    {
        image: `${import.meta.env.BASE_URL}images/2021-Chevrolet-Blazer-parked-in-front-of-a-city-building_mobile.avif`,
        title: "Chevrolet Blazer",
    },
    {
        image: `${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`,
        title: "Cadillac Escalade V-Series",
    },
];

const Slider: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="min-h-screen">

            {/* Navigation */}
            <div className="navigation d-flex justify-content-end gap-1 mb-5">
                <button
                    className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
                    style={{width: "50px", height: "50px"}}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    {"<"}
                </button>

                <button
                    className="btn rounded-circle d-flex align-items-center justify-content-center"
                    style={{width: "50px", height: "50px"}}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    {">"}
                </button>
            </div>

            {/* Slider */}
            <div className="mx-auto">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 3.5,
                        },
                        
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>

                            {/* Card */}
                            <div className="slider-wrapper rounded-xl overflow-hidden">

                                {/* Image */}
                                <div className="slider-img-container">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="slider-img object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="">
                                    <p className="text-lg font-semibold">
                                        {item.title}
                                    </p>
                                </div>

                            </div>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;