import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";



const Layout: React.FC = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            <div className="">
                <Footer />
            </div>
        </div>
    );

}

export default Layout;