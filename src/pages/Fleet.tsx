import { ArrowUpRight, Check, SquareCheck } from "lucide-react";
import BreadCrumb from "../components/Breadcrumb";
import FleetFilters from "../components/FleetFilters";


const Fleet: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="">
                    <BreadCrumb name="Our Fleet" links={[{ name: "Home", link: "/home" }, { name: "Fleet", link: "/fleet" }]} />
                </div>

                <div className="sub-section">
                    <FleetFilters />

                    <div className="mt-4">
                        <div className="row">
                            <div className="col-md-4 mb-3">
                                <div className="fleet-content">
                                    <img src={`${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`} />
                                    <span>Available</span>
                                    <button className="btn btn-sm btn-circular"><ArrowUpRight /></button>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="fleet-content">
                                    <img src={`${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`} />
                                    <button className="btn btn-sm btn-circular"><ArrowUpRight /></button>
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <div className="fleet-content">
                                    <img src={`${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`} />
                                    <button className="btn btn-sm btn-circular"><ArrowUpRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="load-more btn btn-secondary">Load More</button>
                    </div>
                </div>

                <div className="section">
                    <div className="popular-car">
                        <div className="row">
                            <div className="col-md-7 p-3">
                                <p className="popular-title">Most Popular Car</p>
                                <h2>Hyndai Santa Fe</h2>
                                <div className="popular-features flex-row flex-grow flex-wrap d-flex justify-content-start">
                                    <div className="p-2"><SquareCheck color="green" size={15} /> Up to 8 Passengers</div>
                                    <div className="p-2"><SquareCheck color="green" size={15} /> Up to 8 Passengers</div>
                                    <div className="p-2"><SquareCheck color="green" size={15} /> Up to 8 Passengers</div>
                                    <div className="p-2"><SquareCheck color="green" size={15} /> Up to 8 Passengers</div>
                                    <div className="p-2"><SquareCheck color="green" size={15} /> Up to 8 Passengers</div>
                                    <div className="p-2"><SquareCheck color="green" size={15} /> Up to 8 Passengers</div>
                                    <div className="p-2"><SquareCheck color="green" size={15} /> Up to 8 Passengers</div>

                                </div>

                                <div className="popular-actions mt-3">
                                    <button className="btn btn-sm btn-primary-circular"><ArrowUpRight /></button>
                                    <button className="btn btn-tertiary">Rent Now</button>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="popular-img">
                                    <img src={`${import.meta.env.BASE_URL}images/Santa-Fe-Highlander-Exterior-069.webp`} />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fleet;