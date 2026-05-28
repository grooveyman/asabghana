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
                        <div className="footer-left col-md-3">
                            <div className="social-icons">
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
                        <div className="col-md-6">
                            <div className="copyright text-center">
                                <p>&copy; {new Date().getFullYear()} ASAB GHANA RENTALS. All rights reserved.</p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="footer-links d-flex justify-content-between">
                                <a href="">Privacy Policy</a>
                                <a href="">Terms of Service</a>
                            </div>
                        </div>

                    </div>



                </div>
            </div>
        </>
    );
};

export default Footer;