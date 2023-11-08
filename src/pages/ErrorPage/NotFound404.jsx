import { Link } from "react-router-dom";
import NavigationBar from "../../components/layouts/NavigationBar";
import FooterSection from "../../components/layouts/FooterSection";
import TitleHelmet from "../../components/ui/TitleHelmet";

const NotFound404 = () => {
    return (
        <>
            <TitleHelmet title='PrintHubFinder | NotFound'></TitleHelmet>
            <NavigationBar></NavigationBar>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="h-80 w-80 object-cover"><img className="object-cover" src="https://img.freepik.com/premium-vector/404-error-design-with-broken-robot_23-2147730666.jpg?w=1380" alt="" /></div>
                <h5 className="text-3xl">Back to <Link className="font-bold text-blue-600" to="/" >Home</Link></h5>
            </div>
            <FooterSection></FooterSection>
        </>
    );
};

export default NotFound404;