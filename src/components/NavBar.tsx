import "./nav.css";

const NavBar:React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="/images/logo.png" alt="Asab Ghana Logo" width="auto" height="50" className="d-inline-block align-text-top" />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
                    <ul className="navbar-nav ms-lg-auto navitems">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Book</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Fleet</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
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