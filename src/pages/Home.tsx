
import "../assets/home.css";
import AvailableCars from "../components/AvailableCars";
import HeroBook from "../components/HeroBook";
import NewsLetter from "../components/NewsLetter";
import OurFleet from "../components/OurFleet";
import WhyChooseUs from "../components/WhyChooseUs";

const Home: React.FC = () => {
    return (
        <>
            <div className="container">
                <div id="hero-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={`${import.meta.env.BASE_URL}images/2022-mercedes-benz-s500-4matic-102-1642184016.avif`} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={`${import.meta.env.BASE_URL}images/2021-Chevrolet-Blazer-parked-in-front-of-a-city-building_mobile.avif`} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={`${import.meta.env.BASE_URL}images/2024-cadillac-escalade-v-series-010.jpg`} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <HeroBook />

                </div>

                {/* About */}

                <div className="about-section section">
                    <h2>About Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                ASAB GHANA RENTALS is a Ghanaian-owned rental company dedicated to providing high-quality rental services to clients across various industries. We understand the importance of reliability, convenience, and timely delivery, which is why we work tirelessly to ensure our customers receive the best equipment and support for their needs.</p>

                            <p>Over the years, we have built a reputation for professionalism, excellent customer service, and dependable rental solutions. Our team is passionate about helping clients achieve their goals through flexible rental packages and efficient service delivery.</p>

                            <p>At ASAB GHANA RENTALS, we believe that every client deserves quality service, transparency, and value for money.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="about-car">
                                        <img src={`${import.meta.env.BASE_URL}images/2022-mercedes-benz-s500-4matic-102-1642184016.avif`} alt="About Car" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-md-6 mt-2">
                                    <div className="about-experience">
                                        <p>7+ Years</p>
                                        <span>Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <OurFleet />
            </div>
            <div className="full-section">
                <AvailableCars />
            </div>

            <div className="container">
                <div className="section">
                    <h2>Why Choose Us?</h2>
                    <WhyChooseUs />
                </div>

                <div className="section">
                    <div className="col-md-12 car-brands">
                        <div className="d-flex justify-content-center">
                            <img src={`${import.meta.env.BASE_URL}images/logos/bmw.png`} />
                            <img src={`${import.meta.env.BASE_URL}images/logos/mercedes-benz.png`} />
                            <img src={`${import.meta.env.BASE_URL}images/logos/chevrolet.png`} />
                            <img src={`${import.meta.env.BASE_URL}images/logos/toyota.png`} />
                        </div>
                    </div>
                </div>


            </div>

            <div className='newsletter-section'>
                <NewsLetter />
            </div>

            

        </>
    );
}

export default Home;