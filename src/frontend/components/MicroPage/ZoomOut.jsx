
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimationSection from "./LottieAnimationSection";

gsap.registerPlugin(ScrollTrigger);

const ZoomOutImage = ({data}) => {
    return (
        <div className="mvn_mall_animation mb-4">
            <LottieAnimationSection data={data}   isMainBanner={true} />
        </div>
    );
};

export default ZoomOutImage;
