

const Contact: React.FC = () => {
    return (
        <>
            <div className="">
                <h5>Questions/Enquiries? Get in Touch</h5>

                <div className="card mt-4 p-5">
                    <div className="row">
                        <div className="col-md-7 mb-3">
                            <div className="row contact-form-name">
                                <div className="col-md-6">
                                    <input className="form-control" type="text" placeholder="Name" />
                                </div>
                                <div className="col-md-6">
                                    <input className="form-control" type="text" placeholder="Email" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <input className="form-control" type="text" placeholder="Subject" />
                                </div>
                            </div>

                            <div className="row mt-4">
                                <div className="col-md-12">
                                    <textarea cols={10} rows={6} className="form-control" placeholder="How can we help you?">

                                    </textarea>
                                </div>
                            </div>

                            <div className="mt-4">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="green-card">
                                <div className="contact-card  p-4">
                                    <div>
                                        <h6>Address</h6>
                                        <p>5th Avenue, East Legon, Near Klonum Astroturf</p>
                                    </div>
                                    <div className="mt-5">
                                        <h6>Phone</h6>
                                        <p>+233 (0) 244 0000000</p>
                                    </div>
                                    <div className="mt-5">
                                        <h6>Working Hours</h6>
                                        <p>Mon - Fri, 8:00am - 5:00pm</p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                    
                </div>
                
            </div>
        </>
    );
}

export default Contact;