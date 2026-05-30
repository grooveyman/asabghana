import { ArrowUpRight, SquareCheck } from "lucide-react";
import BreadCrumb from "../components/Breadcrumb";
import FleetFilters from "../components/FleetFilters";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const data = [
    {
        id: 1,
        avail_status: 1,
        image: `${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`,
        category: "SUV",
        brand: "Cadillac"
    },
    {
        id: 2,
        avail_status: 1,
        image: `${import.meta.env.BASE_URL}images/2022-mercedes-benz-s500-4matic-102-1642184016.avif`,
        category: "Compact",
        brand: "Mercedes"
    }
];

const categories = ["All", ...new Set(data.map((item) => item.category))];
const brands = [...new Set(data.map((item) => item.brand))];

console.log(categories);


const Fleet: React.FC = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedBrand, setSelectedBrand] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");

    const filteredVehicles = data.filter((vehicle) => {
        const categoryMatch = selectedCategory === "All" || vehicle.category === selectedCategory;
        const brandMatch = selectedBrand === "All" || vehicle.brand === selectedBrand;
        const statusMatch = selectedStatus === "All" || (selectedStatus === "Available" && vehicle.avail_status === 1) || (selectedStatus === "Unvailable" && vehicle.avail_status === 0);

        return categoryMatch && brandMatch && statusMatch;
    })
    return (
        <>
            <div className="container">
                <div className="">
                    <BreadCrumb name="Our Fleet" links={[{ name: "Home", link: "/" }, { name: "Fleet", link: "/fleet" }]} />
                </div>

                <div className="sub-section">
                    <FleetFilters categories={categories} selectedStatus={selectedStatus} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} onStatusChange={setSelectedStatus} brands={brands} selectedBrand={selectedBrand} onBrandChange={setSelectedBrand} />

                    <div className="mt-4">
                        <div className="row">
                            {filteredVehicles.map((vehicle, index) => (
                                <motion.div
                                    key={vehicle.id}
                                    className="col-md-4 mb-3"
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                >
                                    
                                        <div className="fleet-content">
                                            <img src={vehicle.image} />
                                            {vehicle.avail_status === 1 && (<span>Available</span>)}
                                            <button className="btn btn-sm btn-circular"><ArrowUpRight /></button>
                                        </div>
                                    
                                </motion.div>

                            ))}
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