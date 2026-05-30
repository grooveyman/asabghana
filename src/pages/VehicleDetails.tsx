import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "../assets/main.css";

import "swiper/css";
import "swiper/css/navigation";

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

const VehicleDetails: React.FC = () => {
    const swiperRef = useRef<SwiperType | null>(null);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="car-card">
                            <div className="car-carousel position-relative">
                                <Swiper
                                    modules={[Navigation]}
                                    navigation
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                        },

                                    }}
                                >
                                    {data.map((item, index) => (
                                        <SwiperSlide key={index}>

                                            {/* Card */}
                                            <div className="slider-wrapper rounded-xl overflow-hidden">

                                                {/* Image */}
                                                <div className="det-slider-img-container">
                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="slider-img object-cover"
                                                    />
                                                </div>
                                            </div>

                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            <div className="row mt-4">
                                <div className="det-title col-md-8">
                                    <h2>Cadillac Escalade</h2>
                                    <p>2022 Model</p>
                                </div>
                                <div className="col-md-4 d-flex justify-content-end">
                                    <div className="det-title">
                                        <h4>GHS 300</h4>
                                        <p>per day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* detials */}
                <div className="row mt-5">
                    <div className="col-md-8">
                        <div className="card">
                            <h5 style={{ fontWeight: "bold" }}>Vehicle Features</h5>
                            <div className="features row">
                                <div className="features-list col-md-4">
                                    <p>Safety</p>
                                    <div className="">
                                        <p>Back Camera</p>
                                        <p>Blindspot Warning</p>
                                    </div>
                                </div>
                                <div className="features-list col-md-4">
                                    <p>Device Connectivity</p>
                                    <div className="">
                                        <p>Aux Input</p>
                                        <p>Bluetooth</p>
                                    </div>
                                </div>
                                <div className="features-list col-md-4">
                                    <p>Convenience</p>
                                    <div className="">
                                        <p>Keyless Entry</p>
                                        <p>Comfortable Driver seat</p>
                                    </div>
                                </div>
                                <div className="features-list col-md-4">
                                    <p>Device Connectivity</p>
                                    <div className="">
                                        <p>Aux Input</p>
                                        <p>Bluetooth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* price details */}
                    <div className="col-md-4">
                        <div className="card">
                            <h5 style={{ fontWeight: "bold" }}>Pricing Details</h5>
                            <table>
                                <tr>
                                    <td>Car Rent Amount</td>
                                    <td>GHS 400.00</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td>- GHS 100.00</td>
                                </tr>
                                <tr>
                                    <td>Total Amount</td>
                                    <td>GHS 300.00</td>
                                </tr>
                            </table>
                            <div className="mt-3">
                                <button className="btn btn-primary form-control">Rent Now (GHS 300.00)</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default VehicleDetails;