import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FeaturedSection from "./FeaturedSection";
import FaqSection from "./FaqSection";
import Slider from "./Slider";
import PopularServices from "./PopularServices";

export const Example = () => {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

    return (
        <div className="wrapper">
            <motion.div
                className="container"
                style={{
                    scale
                }}
            >
                {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmsUDfHjD91ln5AAjbYnK1Wcv7FfHqI976CS5kO2Wz5gIK0FxAI8_XS0VW-Zkm87tTI2M&usqp=CAU" alt="" /> */}
                {/* <Slider></Slider> */}
                {/* <PopularServices></PopularServices> */}
                <FeaturedSection></FeaturedSection>
                {/* <FaqSection></FaqSection> */}
                <motion.div
                    className="item"
                    style={{
                        scaleY: scrollYProgress
                    }}
                />
            </motion.div>
        </div>
    );
};
