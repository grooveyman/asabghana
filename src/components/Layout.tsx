import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToHash from "./ScrollToHash";



const Layout: React.FC = () => {
    return (
        <div>
            <ScrollToHash/>
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