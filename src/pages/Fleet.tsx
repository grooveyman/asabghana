import BreadCrumb from "../components/Breadcrumb";


const Fleet: React.FC = () => {
    return (
        <>
            <div className="container">
                <BreadCrumb name="Our Fleet" links={[{name:"Home", link:"/home"}, {name:"Fleet", link:"/fleet"}]} />
            </div>
        </>
    );
};

export default Fleet;