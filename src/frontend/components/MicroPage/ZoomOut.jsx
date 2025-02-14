
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimationSection from "./LottieAnimationSection";
import ScrollTriggerFrames from "./ScrollTriggerFrames";

gsap.registerPlugin(ScrollTrigger);

const ZoomOutImage = ({dataFrames}) => {
    console.log(dataFrames,"dataFrames")
    return (
        <div className="mvn_mall_animation mb-4">
            {/* <LottieAnimationSection data={data}   isMainBanner={true} /> */}
            <ScrollTriggerFrames data={dataFrames} />
        </div>
    );
};

export default ZoomOutImage;
