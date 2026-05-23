

const HeroBook: React.FC = () => {
    return (
        <>
            <div className="book-form">

                <form className="book-form-body">
                    <div className="mb-2">
                        <input type="text" className="form-control" id="pickup" placeholder="Pickup Address" />
                    </div>
                    <div className="mb-2">
                        <input type="text" className="form-control" id="dropoff" placeholder="Drop-off Address" />
                    </div>
                    <div className="mb-2">
                        <input type="date" className="form-control" id="dateTime" />
                    </div>
                    <div className="mb-2 d-flex align-items-center gap-2">

                        <label
                            htmlFor="pickupTime"
                            className="form-label mb-0"
                            style={{ whiteSpace: "nowrap" }}
                        >
                            Pickup Time:
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            id="pickupTime"
                            placeholder="10:30"
                            style={{ maxWidth: "120px" }}
                        />

                        <select className="form-control" style={{ maxWidth: "70px" }}>
                            <option>AM</option>
                            <option>PM</option>
                        </select>

                    </div>
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </form>
            </div>
        </>
    );
}

export default HeroBook;