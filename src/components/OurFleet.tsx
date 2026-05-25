import Slider from "./Slider";


const OurFleet: React.FC = () => {
    return (
        <>
            <div className="section">
                <h2>Our Fleet</h2>
                <button className="btn btn-primary btn-sm">View More</button>

                <div>
                    <Slider />
                </div>
            </div>
        </>
    );
};

export default OurFleet;