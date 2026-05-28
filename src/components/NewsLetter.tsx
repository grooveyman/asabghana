

const NewsLetter: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="newsletter-section d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 py-4">

                    <h2 className="m-0 text-center text-lg-start">
                        Subscribe to our Newsletter
                    </h2>

                    <form className="newsletter-form d-flex flex-column flex-sm-row gap-2 w-100 w-lg-auto">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email address"
                        />

                        <button
                            type="submit"
                            className="btn btn-primary bg-black border-0 px-4"
                        >
                            Subscribe
                        </button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default NewsLetter;