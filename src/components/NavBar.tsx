import { Link, NavLink } from "react-router-dom";
import "./nav.css";

const NavBar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={`${import.meta.env.BASE_URL}images/logo.png`}
                        alt="Asab Ghana Logo"
                        width="auto"
                        height="50"
                        className="d-inline-block align-text-top"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-start"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-lg-auto navitems">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-nav" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/book"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-nav" : ""}`
                                }
                            >
                                Book
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/fleet"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-nav" : ""}`
                                }
                            >
                                Fleet
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-nav" : ""}`
                                }
                            >
                                Services
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-nav" : ""}`
                                }
                            >
                                About Us
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about#contact">
                                Contact
                            </Link>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/faq"
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? "active-nav" : ""}`
                                }
                            >
                                FAQ
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;