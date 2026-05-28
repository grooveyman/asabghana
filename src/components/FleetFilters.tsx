import "./main.css";

const FleetFilters: React.FC = () => {
    return (
        <>
            <div className="fleet-filter-container d-flex flex-column flex-lg-row justify-content-between gap-3">

                {/* Left Filter */}
                <div className="left-filter d-flex flex-wrap">
                    <button className="btn-sm filter-btn filter-active">All</button>
                    <button className="btn-sm filter-btn">SUV</button>
                    <button className="btn-sm filter-btn">4 Wheel</button>
                    <button className="btn-sm filter-btn">Compact</button>
                    <button className="btn-sm filter-btn">Bus</button>
                </div>

                {/* Right Filter */}
                <div className="right-filter d-flex flex-column flex-sm-row gap-2">
                    <select className="form-select">
                        <option selected disabled>Brand</option>
                        <option>Toyota</option>
                        <option>Kia</option>
                    </select>

                    <select className="form-select">
                        <option>Available</option>
                        <option>Kia</option>
                    </select>

                </div>

            </div>
        </>
    );
};
export default FleetFilters;