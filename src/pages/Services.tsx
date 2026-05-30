import BreadCrumb from "../components/Breadcrumb";


const Services: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="">
                    <BreadCrumb name="Services" links={[{ name: "Home", link: "/" }, { name: "Services", link: "/services" }]} />
                </div>

                <div className="section">
                    <div className="row">
                        <div className="services-text col-md-5 d-flex align-items-center">
                            <div>
                                <h5>Airport Pickup & Drop off</h5>
                                <p>Start or end your journey with comfort and peace of mind. Our airport transfer service offers punctual pickups, professional drivers, and well-maintained vehicles to ensure a smooth travel experience. Whether you're arriving in the city or heading to the airport, we make every trip convenient, reliable, and stress-free.</p>
                            </div>

                        </div>
                        <div className="col-md-7">
                            <div className="services-img">
                                <img src={`${import.meta.env.BASE_URL}/images/5-good-reasons-to-use-a-limo-service-for-your-airport-transfers_pd40106w2440h1500rcrop_559.jpg`} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-7">
                            <div className="services-img">
                                <img src={`${import.meta.env.BASE_URL}/images/Intercity-trips.png`} />
                            </div>
                        </div>
                        <div className="services-text col-md-5 d-flex align-items-center">
                            <div>
                                <h5>Intercity Trips</h5>
                                <p>Travel between cities in comfort and style with our dependable intercity transportation service. Whether you're traveling for business, family visits, tourism, or special occasions, our spacious and well-equipped vehicles provide a relaxing journey. Enjoy flexible scheduling, experienced drivers, and a safe travel experience from departure to destination.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">

                        <div className="services-text col-md-5 d-flex align-items-center">
                            <div>
                                <h5>Wedding Events</h5>
                                <p>Make your special day even more memorable with our premium wedding transportation services. We offer elegant vehicles for the bride and groom, bridal party, and guests, ensuring everyone arrives on time and in style. From intimate ceremonies to grand celebrations, we provide reliable, comfortable, and professional transportation tailored to your wedding needs.</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="services-img">
                                <img src={`${import.meta.env.BASE_URL}/images/Special-Events-Car-Rental-Service.jpg`} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;