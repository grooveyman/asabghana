

const NewsLetter: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="newsletter-section d-flex justify-content-between">
                    <h2>Subscribe to our Newsletter</h2>
                    <div className="">
                        <form className="newsletter-form d-flex gap-2">
                            <input type="email" className="form-control" placeholder="Enter your email address" />
                            <button type="submit" className="btn btn-primary bg-black">Subscribe</button>
                        </form>
                    </div>

                </div>
            </div>

        </>
    );
};

export default NewsLetter;