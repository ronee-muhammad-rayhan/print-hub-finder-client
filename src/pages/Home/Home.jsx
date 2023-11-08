import TitleHelmet from "../../components/ui/TitleHelmet";
import FaqSection from "./FaqSection";
import FeaturedSection from "./FeaturedSection";
import { Example } from "./FramerMotion";
import PopularServices from "./PopularServices";
import Slider from "./Slider";

const Home = () => {
    return (
        <div>
            <TitleHelmet title='PrintHubFinder | Home'></TitleHelmet>
            {/* HomePage */}
            {/* Banner/Slider Section */}
            <Slider></Slider>



            {/* <Example></Example> */}
            {/* Popular Services Section */}
            <h3 className="text-3xl font-bold text-center">Popular Services</h3>
            <PopularServices></PopularServices>
            {/* The Featured Section */}
            <h3 className="text-3xl font-bold text-center">Featured Zone</h3>
            <FeaturedSection></FeaturedSection>
            <Example></Example>
            <FeaturedSection></FeaturedSection>
            {/* 3 Extra Sections */}
            <h3 className="text-3xl font-bold text- py-4 text-center">FAQ</h3>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;