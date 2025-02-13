
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimationSection from "./LottieAnimationSection";

gsap.registerPlugin(ScrollTrigger);

const ZoomOutImage = ({data}) => {
    return (
        <div>
            <LottieAnimationSection data={data}/>
        </div>
    );
};

export default ZoomOutImage;
