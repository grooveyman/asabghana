import BreadCrumb from "../components/Breadcrumb";
import "../assets/book.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { ImagePlus } from "lucide-react";

const Book: React.FC = () => {
    const [pickupDate, setPickupDate] = useState<Date | null>(new Date());
    const [returnDate, setReturnDate] = useState<Date | null>(new Date());

    const handlePickupDate = (date: Date | null) => {
        setPickupDate(date);
    }
    const handleReturnDate = (date: Date | null) => {
        setReturnDate(date);
    }

    const [availableOnly, setAvailableOnly] = useState(false);

    const [image, setImage] = useState<string | null>(null);
    const handleImageChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];

        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <div className="container">
                <div className="">
                    <BreadCrumb name="Book" links={[{ name: "Home", link: "/" }, { name: "Book", link: "/book" }]} />
                </div>

                <div className="row">
                    <div className="car-det">
                        <div className="card">
                            <div className="d-flex justify-content-between flex-row flex-wrap">
                                <div className="d-flex justify-content-start gap-3 flex-wrap">
                                    <div>
                                        <img src={`${import.meta.env.BASE_URL}images/2022-mercedes-benz-s500-4matic-102-1642184016.avif`} />
                                    </div>
                                    <div className="car-det">
                                        <p>Mercedes Benz S Class Convertible</p>
                                        <div className="car-det-meta d-flex flex-justify-start gap-3">
                                            <div>
                                                <p>Category: Luxury</p>
                                            </div>
                                            <div>
                                                <p>Brand: Mercedes</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="car-price d-flex align-items-center">
                                    <div>
                                        <p>GHS 500</p>
                                        <p>Total Amount</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-8">
                        <div className="card">
                            <h5>Basic Information</h5>

                            <div className="col-md-12">
                                <label>Full Name</label>
                                <div>
                                    <input className="form-control" type="text" placeholder="Enter your full name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Email Address</label>
                                    <div>
                                        <input className="form-control" type="text" placeholder="Enter your email address" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>Phone Number</label>
                                    <div>
                                        <input className="form-control" type="text" placeholder="Enter your phone number" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <label>Home Address/GPS Address</label>
                                <div>
                                    <input className="form-control" type="text" placeholder="Enter your home address/ GPS address" />
                                </div>
                            </div>
                        </div>

                        <div className="card mt-3 mb-3">
                            <h5>Rental Information</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Pick up date & time</label>
                                    <DatePicker
                                        selected={pickupDate}
                                        onChange={handlePickupDate}
                                        showTimeSelect
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                        minDate={new Date()}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Return date & time</label>
                                    <DatePicker
                                        selected={returnDate}
                                        onChange={handleReturnDate}
                                        showTimeSelect
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        className="form-control"
                                        minDate={new Date()}
                                    />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <label>Do you want your rented car delivered? (This may come with extra charges)</label>
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

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card">
                            <h5>Upload Driver's License</h5>
                            <div className="">
                                
                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label htmlFor="front-image" className="upload-box">
                                            <ImagePlus size={26} />
                                            <h6>Front View</h6>
                                            <span>Click to upload</span>
                                        </label>

                                        <input
                                            id="front-image"
                                            type="file"
                                            accept="image/*"
                                            hidden
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="rear-image" className="upload-box">
                                            <ImagePlus size={26} />
                                            <h6>Back View</h6>
                                            <span>Click to upload</span>
                                        </label>

                                        <input
                                            id="rear-image"
                                            type="file"
                                            accept="image/*"
                                            hidden
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <h5>Upload National Identification (Ghana Card)</h5>
                            <div className="">
                                
                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label htmlFor="front-image" className="upload-box">
                                            <ImagePlus size={26} />
                                            <h6>Front View</h6>
                                            <span>Click to upload</span>
                                        </label>

                                        <input
                                            id="front-image"
                                            type="file"
                                            accept="image/*"
                                            hidden
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="rear-image" className="upload-box">
                                            <ImagePlus size={26} />
                                            <h6>Back View</h6>
                                            <span>Click to upload</span>
                                        </label>

                                        <input
                                            id="rear-image"
                                            type="file"
                                            accept="image/*"
                                            hidden
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <button className="btn btn-primary form-control mt-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Book;