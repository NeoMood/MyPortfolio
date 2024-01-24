import { useProgress } from "@react-three/drei";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export const LoadingScreen = (props) => {
    const {started, setStarted} = props;
    const {progress, total, loaded, items} = useProgress();
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
      fetch("/animations/loading.json")
        .then((response) => response.json())
        .then((data) => setAnimationData(data));
    }, []);

    useEffect(() => {
        if(progress === 100)
        {
            setTimeout(() => {
                setStarted(true);
            }, 50);
        }
    }, [progress, total, loaded, items]);
    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 transition-opacity
         duration-1000 pointer-events-none flex items-center justify-center bg-gradiant
         ${started ? "opacity-0" : "opacity-100"}`}>
        <div className="text-3xl md:text-6xl font-bold contact_font text-[peru] relative flex flex-col items-center">
            <div
            className="absolute left-0 top-0 overflow-hidden truncate text-clip transition-all duration-500"
            style={{ width: `${progress}%` }}
            >
            Saâd Gmira
            </div>
            <div className="opacity-40">Saâd Gmira</div>
            <Lottie animationData={animationData} className="absolute mt-20 w-12 h-12 "/>
        </div>
        </div>
    );
};
