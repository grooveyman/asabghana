import { ArrowUpRight } from "lucide-react";
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
                            <div className="col-md-4">
                                <div className="fleet-content">
                                    <img src={`${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`}/>
                                    <span>Available</span>
                                    <button className="btn btn-sm btn-circular"><ArrowUpRight/></button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="fleet-content">
                                    <img src={`${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`}/>
                                    <button className="btn btn-sm btn-circular"><ArrowUpRight/></button>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="fleet-content">
                                    <img src={`${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`}/>
                                    <button className="btn btn-sm btn-circular"><ArrowUpRight/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button className="load-more btn btn-secondary">Load More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Fleet;