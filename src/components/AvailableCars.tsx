
import "./availablecars.css";
const AvailableCars: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="section">
                    <h2>Available Cars</h2>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="available-car-card">
                                <div className="available-img-container">
                                    <img src="/images/2022-mercedes-benz-s500-4matic-102-1642184016.avif" alt="Available Car" className="img-fluid" />
                                </div>
                                <div className="car-info">
                                    <h5>Mercedes-Benz S500</h5>
                                    <p>Luxury Sedan</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="available-car-card">
                                <div className="available-img-container">
                                    <img src="/images/2021-Chevrolet-Blazer-parked-in-front-of-a-city-building_mobile.avif" alt="Available Car" className="img-fluid" />
                                </div>
                                <div className="car-info">
                                    <h5>Chevrolet Blazer</h5>
                                    <p>SUV</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="available-car-card">
                                <div className="available-img-container">
                                    <img src="/images/2024-cadillac-escalade-v-series-010.jpg" alt="Available Car" className="img-fluid" />
                                </div>
                                <div className="car-info">
                                    <h5>Cadillac Escalade V-Series</h5>
                                    <p>Luxury SUV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                        <button className="btn btn-primary btn-sm">View More</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AvailableCars;