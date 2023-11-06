import { Outlet } from "react-router-dom";
import NavigationBar from "../NavigationBar";

const MainLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;