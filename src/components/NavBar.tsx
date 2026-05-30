import { Link } from "react-router-dom";
import "./nav.css";

const NavBar:React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Asab Ghana Logo" width="auto" height="50" className="d-inline-block align-text-top" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto navitems">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/book">Book</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="fleet" className="nav-link">Fleet</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Services</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;