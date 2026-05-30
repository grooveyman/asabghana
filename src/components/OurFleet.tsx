import { useNavigate } from "react-router-dom";
import Slider from "./Slider";


const OurFleet: React.FC = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="sub-section">
                <h2>Our Fleet</h2>
                <button className="btn btn-primary btn-sm" onClick={() => navigate("/fleet")}>View More</button>
                
                <div>
                    <Slider />
                </div>
            </div>
        </>
    );
};

export default OurFleet;