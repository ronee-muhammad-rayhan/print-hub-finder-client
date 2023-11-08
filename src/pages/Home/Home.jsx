import TitleHelmet from "../../components/ui/TitleHelmet";
import { Example } from "./FramerMotion";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <TitleHelmet title='PrintHubFinder | Home'></TitleHelmet>
            {/* HomePage */}
            {/* Banner/Slider Section */}
            <Slider></Slider>
            <Example></Example>
            {/* Popular Services Section */}
            {/* The Featured Section */}
            {/* 3 Extra Sections */}
        </div>
    );
};

export default Home;