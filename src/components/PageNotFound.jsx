import animation from "../assets/animations/animation404.json";
import animation2 from "../assets/animations/animation404-2.json";
import Lottie from "lottie-react";

const LoadingAnimation = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <span style={{ width: 600 }}>
                <Lottie animationData={animation2} />
            </span>
        </div>
    );
};

export default LoadingAnimation;
