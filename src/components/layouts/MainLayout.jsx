import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import FooterSection from "./FooterSection";

const MainLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <FooterSection></FooterSection>
        </div>
    );
};

export default MainLayout;