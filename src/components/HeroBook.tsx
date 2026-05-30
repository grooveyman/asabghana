import { useState } from "react";
import DatePicker from "react-datepicker";


const HeroBook: React.FC = () => {
    const [pickupDate, setPickupDate] = useState<Date | null>(null);
    const handlePickupDate = (date: Date | null) => {
        setPickupDate(date);
    }
    const [returnDate, setReturnDate] = useState<Date | null>(null);
    const handleReturnDate = (date: Date | null) => {
        setReturnDate(date);
    }

    const [availableOnly, setAvailableOnly] = useState(false);


    return (
        <>
            <div className="book-form">

                <form className="book-form-body">
                    <div className="mb-2">
                        <DatePicker
                            selected={pickupDate}
                            onChange={handlePickupDate}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className="form-control"
                            placeholderText="Pickup Date and Time"
                            minDate={new Date()} />
                    </div>
                    <div className="mb-2">
                        <DatePicker
                            selected={returnDate}
                            onChange={handleReturnDate}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className="form-control"
                            placeholderText="Return Date and Time"
                            minDate={new Date()} />
                    </div>

                    <div className="mb-2 d-flex align-items-start gap-2 flex-column flex-wrap">

                        <div>
                            <label>Do you want your rented car delivered? </label>
                        </div>
                        <div>
                            <label className="toggle-switch">
                                <input
                                    type="checkbox"
                                    checked={availableOnly}
                                    onChange={() => setAvailableOnly(!availableOnly)}
                                />
                                <span className="slider"></span>
                            </label>
                        </div>

                    </div>
                    <button type="submit" className="btn btn-primary">Book Now</button>
                </form>
            </div>
        </>
    );
}

export default HeroBook;