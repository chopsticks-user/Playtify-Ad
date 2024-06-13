import './Content.css';
import introVideo from '../assets/sample_15s.mp4';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const scenes = [
    {
        duration: 5000,
        element: (
            <video className="video" controls autoPlay muted playsInline loop>
                <source src={introVideo} type="video/mp4" />
            </video>
        ),
    },
    {
        duration: 5000,
        element: (
            <video className="video" controls autoPlay muted playsInline loop>
                <source src={introVideo} type="video/mp4" />
            </video>
        ),
    },
];

export default function Content() {
    const [sceneIndex, setSceneIndex] = useState(0);

    useEffect(() => {
        console.log(scenes.length);
        if (scenes.length === sceneIndex) {
            setSceneIndex(-1);
        }
        setTimeout(() => {
            console.log(sceneIndex);
            setSceneIndex(prev => prev + 1);
        }, scenes[sceneIndex].duration);
    }, [sceneIndex]);

    return (
        <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 1.0 }}
        >
            <DeviceFrameset device="iPhone 8" color="black">
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: '0' }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.5 }}
                >
                    {scenes[sceneIndex].element}
                </motion.div>
            </DeviceFrameset>
        </motion.div>
    );
}