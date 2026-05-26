import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";

const Footer: React.FC = () => {
    return (
        <>
            <div className="footer-section footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-left col-md-6">
                            <img src={`${import.meta.env.BASE_URL}images/logo.png`} width={"auto"} height={"100px"} />
                            <p>Asab Ghana Rentals</p>
                            <div className="social-icons d-flex gap-3 mt-3">
                                <a href="https://www.facebook.com/asabghana" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://www.twitter.com/asabghana" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://www.instagram.com/asabghana" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                        <div className="footer-right col-md-6">
                            <div className="footer-links">
                                <div className="row">
                                    <div className="col-md-3">
                                        <a href="#">Home</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Book</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Fleet</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Services</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">About Us</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Contact</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">FAQ</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Terms of Service</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Privacy Policy</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Support</a>
                                    </div>
                                    <div className="col-md-3">
                                        <a href="#">Careers</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright text-center mt-4">
                        <p>&copy; {new Date().getFullYear()} ASAB GHANA RENTALS. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;