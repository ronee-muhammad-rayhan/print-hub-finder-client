import TitleHelmet from "../../components/ui/TitleHelmet";
import CallToActionSection from "./CallToActionSection";
import FaqSection from "./FaqSection";
import FeaturedSection from "./FeaturedSection";
import { Example } from "./FramerMotion";
import OurQualitiesSection from "./OurQualitiesSection";
import PopularServices from "./PopularServices";
import Slider from "./Slider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

const Home = () => {
    AOS.init();

    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <div>
            <TitleHelmet title='PrintHubFinder | Home'></TitleHelmet>
            {/* HomePage */}
            {/* Banner/Slider Section */}
            <Slider></Slider>
            <div id="banner" data-aos="flip-right"
                data-aos-duration="1000"
                data-aos-once="false"
            ><Slider></Slider></div>



            {/* <Example></Example> */}
            {/* Popular Services Section */}
            <h3 className="text-3xl font-bold text-center">Popular Services</h3>
            <div data-aos='fade-up' data-aos-duration="3000"><PopularServices></PopularServices></div>
            {/* The Featured Section */}
            <h3 className="text-3xl font-bold text-center">Featured Zone</h3>
            <div data-aos='flip-right'><FeaturedSection></FeaturedSection></div>
            <Example></Example>
            <FeaturedSection></FeaturedSection>
            {/* 3 Extra Sections */}
            {/* FAQ Section */}
            <h3 className="text-3xl font-bold text- py-4 text-center">FAQ</h3>
            <div data-aos='flip-up-left'><FaqSection></FaqSection></div>
            {/* CTA Section */}
            <h3 className="text-3xl font-bold text- py-4 text-center">Call-To-Action(CTA)</h3>
            <div data-aos='flip-left'><CallToActionSection></CallToActionSection></div>
            {/* Our Qualities Section */}
            <h3 className="text-3xl font-bold text- py-4 text-center">Our qualities</h3>
            <div data-aos='zoom-in-up'><OurQualitiesSection></OurQualitiesSection></div>

        </div>
    );
};

export default Home;