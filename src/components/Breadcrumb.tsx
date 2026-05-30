import { Link } from "react-router-dom";

interface BreadCrumbLink {
    name: string;
    link: string;
}
interface BreadCrumbProps {
    name: string;
    links: BreadCrumbLink[]
}
const BreadCrumb: React.FC<BreadCrumbProps> = ({ name, links }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="breadcrumb">
                        <div className="breadcrumb-links">
                            <p>{name}</p>
                            {links.map((link, index) => (
                                <>
                                    <Link className="breadcrumb-link" to={`${link.link}`}>{link.name}</Link>
                                    {index !== links.length - 1 && (
                                        <span className="mx-2 text-white">
                                            /
                                        </span>
                                    )}
                                </>

                            ))}

                            
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default BreadCrumb;