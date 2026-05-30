import "./main.css";

interface FleetFiltersProps {
    categories: string[];
    brands: string[];

    selectedCategory: string;
    selectedBrand: string;
    selectedStatus: string;

    onCategoryChange: (category: string) => void;
    onBrandChange: (brand: string) => void;
    onStatusChange: (status: string) => void;
}
const FleetFilters: React.FC<FleetFiltersProps> = ({ categories, brands, selectedCategory, onCategoryChange, onBrandChange, selectedBrand, selectedStatus, onStatusChange }) => {
    return (
        <>
            <div className="fleet-filter-container d-flex flex-column flex-lg-row justify-content-between gap-3">

                {/* Left Filter */}
                <div className="left-filter d-flex flex-wrap">
                    {categories.map((item, index) => (
                        <button key={index} className={`btn-sm filter-btn ${selectedCategory === item ? 'filter-active':''}`} onClick={() => onCategoryChange(item)}>{item}</button>
                    ))}

                </div>

                {/* Right Filter */}
                <div className="right-filter d-flex flex-column flex-sm-row gap-2">
                    <select className="form-select" value={selectedBrand} onChange={(e) => onBrandChange(e.target.value)}>
                        <option selected value="All">All</option>
                        {brands.map((item) => (
                            <option key={item} value={item}>{item}</option>
                        ))}
                    </select>

                    <select className="form-select" value={selectedStatus} onChange={(e) => onStatusChange(e.target.value)}>
                        <option selected value="All">All</option>
                        <option value="Available">Available</option>
                        <option value="Unvailable">Unavailable</option>
                    </select>

                </div>

            </div>
        </>
    );
};
export default FleetFilters;