import "./Content.css";
import sampleVideo1 from "../assets/sample_15s.mp4";
import sampleVideo2 from "../assets/sample_12s.mp4";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Scene({ src }) {
  return (
    <motion.div
      key={src}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0" }}
      //   exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <video className="video" controls autoPlay muted playsInline loop>
        <source src={src} type="video/mp4" />
      </video>
    </motion.div>
  );
}

const scenes = [
  {
    duration: 5000,
    element: <Scene src={sampleVideo2} key={0} />,
  },
  {
    duration: 5000,
    element: <Scene src={sampleVideo1} key={1} />,
  },
];

export default function Content() {
  const [sceneIndex, setSceneIndex] = useState(0);

  useEffect(() => {
    console.log(sceneIndex);

    if (sceneIndex >= scenes.length - 1) {
      return;
    }

    setTimeout(() => {
      setSceneIndex(sceneIndex + 1);
    }, scenes[sceneIndex].duration);
  }, [sceneIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ duration: 1.0 }}
    >
      <DeviceFrameset device="iPhone 8" color="black">
        <AnimatePresence mode="wait">
          {scenes[sceneIndex].element}
        </AnimatePresence>
      </DeviceFrameset>
    </motion.div>
  );
}
