
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LottieAnimationSection from "./LottieAnimationSection";
import ScrollTriggerFrames from "./ScrollTriggerFrames";

gsap.registerPlugin(ScrollTrigger);

const ZoomOutImage = ({dataFrames}) => {
    console.log(dataFrames,"dataFrames")
    return (
        <div className="mvn_mall_animation mb-2">
            {/* <LottieAnimationSection data={data}   isMainBanner={true} /> */}
            <ScrollTriggerFrames data={dataFrames} isMvnLogo={true} />
        </div>
    );
};

export default ZoomOutImage;
