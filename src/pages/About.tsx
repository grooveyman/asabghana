import BreadCrumb from "../components/Breadcrumb";
import "../assets/about.css";
import { useNavigate } from "react-router-dom";
import Contact from "../components/Contact";


const About: React.FC = () => {
    const navigate = useNavigate();
    const handleBookClick = () =>{
        navigate("/fleet");
    }
    return (
        <>
            <div className="container">
                <div className="">
                    <BreadCrumb name="About Us" links={[{ name: "Home", link: "/" }, { name: "About Us", link: "/about" }]} />
                </div>

                <div className="section">
                    <div className="row">
                        <div className="col-md-7 about-text">
                            <h5>Asab Ghana Rentals</h5>
                            <p>is a Ghanaian-owned rental company dedicated to providing high-quality rental services to clients across various industries. We understand the importance of reliability, convenience, and timely delivery, which is why we work tirelessly to ensure our customers receive the best equipment and support for their needs.<br />

                                <br />Over the years, we have built a reputation for professionalism, excellent customer service, and dependable rental solutions. Our team is passionate about helping clients achieve their goals through flexible rental packages and efficient service delivery.</p>
                        </div>
                        <div className="col-md-5">
                            <div className="card p-5">
                                <img src={`${import.meta.env.BASE_URL}images/logo.png`} height={"100%"} width={"100%"} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="sub-section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="row">
                                    <div className="col-md-7 d-flex align-items-center">
                                        <div className="vision-text">
                                            <h5>Our Vision</h5>
                                            <p>To become Ghana’s leading and most trusted rental company known for excellence, reliability, innovation, and exceptional customer service.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-5 d-flex align-items-center">
                                        <div className="green-card p-5">
                                            <h5>Our Mission</h5>
                                            <p>To provide affordable, efficient, and high-quality rental services that meet the growing needs of businesses and individuals while maintaining professionalism, integrity, and customer satisfaction.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* parallax */}
            <div className="section">
                <div className="parallax">
                    <div className="parallax-overlay">
                        <div className="container">
                            <div className="parallax-content text-start">
                                <h2>Drive Your Dream Car Today</h2>
                                <p>
                                    Luxury, comfort, and reliability for every journey.
                                </p>

                                <button className="btn btn-primary" onClick={handleBookClick}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <Contact />
            </div>
        </>
    );
}

export default About;