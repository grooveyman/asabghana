import "../assets/faq.css";
import BreadCrumb from "../components/Breadcrumb";

const faqData = [
    {
        question: "Are your vehicles insured?",
        answer: "Yes. All vehicles are covered by comprehensive insurance.",
    },
    {
        question: "What does the insurance cover?",
        answer: (
            <>
                <p>The insurance covers:</p>
                <ul>
                    <li>Accidental damage</li>
                    <li>Theft</li>
                    <li>Third-party liability</li>
                </ul>
            </>
        ),
    },
    {
        question: "What situations are not covered by insurance?",
        answer: (
            <>
                <p>Insurance does not cover:</p>
                <ul>
                    <li>Reckless driving</li>
                    <li>Driving under the influence of alcohol or drugs</li>
                    <li>Use by unauthorized drivers</li>
                </ul>
            </>
        ),
    },
    {
        question: "Can I drive the vehicle outside Ghana?",
        answer:
            "Vehicles may not be driven outside Ghana unless written permission has been obtained from ASAB Ghana.",
    },
    {
        question: "Are there restrictions on how the vehicle can be used?",
        answer: (
            <>
                <p>Yes. Vehicles must not be used for:</p>
                <ul>
                    <li>Towing</li>
                    <li>Racing</li>
                    <li>Off-road driving</li>
                    <li>Transporting illegal goods</li>
                    <li>Unauthorized commercial activities</li>
                    <li>Driving under the influence of alcohol or drugs</li>
                </ul>
            </>
        ),
    },
    {
        question: "What should I do if the vehicle breaks down?",
        answer:
            "Notify ASAB Ghana immediately. Clients must not attempt major repairs without prior approval.",
    },
    {
        question: "Will I receive a replacement vehicle if the car breaks down?",
        answer:
            "A replacement vehicle may be provided depending on availability and the nature of the issue.",
    },
    {
        question: "What should I do in case of an accident or theft?",
        answer: (
            <>
                <p>You must:</p>
                <ul>
                    <li>Notify the police immediately</li>
                    <li>Inform ASAB Ghana within 2 hours</li>
                    <li>Submit a police report</li>
                    <li>Complete an incident report form</li>
                </ul>
            </>
        ),
    },
    {
        question: "Can I cancel my booking?",
        answer:
            "Yes. Cancellations made at least 24 hours before pick-up qualify for a full refund.",
    },
    {
        question: "Are there cancellation charges?",
        answer:
            "Late cancellations may attract a fee of up to 50% of one day's rental charge.",
    },
    {
        question: "What happens if I fail to show up for my booking?",
        answer:
            "A no-show without prior communication may result in a full-day rental charge.",
    },
    {
        question: "In what condition are vehicles provided?",
        answer:
            "All vehicles are delivered clean, inspected, and in good working condition.",
    },
    {
        question: "What condition should the vehicle be returned in?",
        answer:
            "Vehicles should be returned in the same condition they were received. Additional cleaning or damage charges may apply where necessary.",
    },
    {
        question: "Is there a vehicle inspection process?",
        answer:
            "Yes. Both pre-rental and post-rental inspections are conducted together with the client.",
    },
    {
        question: "How is my personal information handled?",
        answer:
            "Customer information is used strictly for rental-related purposes and will not be shared without consent except where required by law.",
    },
    {
        question: "Can ASAB Ghana update its rental policies?",
        answer:
            "Yes. ASAB Ghana reserves the right to amend its policies at any time. Updated policies will be communicated before future rental engagements.",
    },
];

const FAQ: React.FC = () => {
    return (
        <div className="container">
            <BreadCrumb
                name="Frequently Asked Questions"
                links={[
                    { name: "Home", link: "/" },
                    { name: "FAQ", link: "/faq" },
                ]}
            />

            <div className="sub-section accordion" id="faqAccordion">
                {faqData.map((faq, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${index !== 0 ? "collapsed" : ""
                                    }`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq${index}`}
                                aria-expanded={index === 0}
                                aria-controls={`faq${index}`}
                            >
                                {faq.question}
                            </button>
                        </h2>

                        <div
                            id={`faq${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                                }`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;