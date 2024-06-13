import './Intro.css';
import AnimatedText from "./AnimatedText";
import React, { useEffect, useState } from 'react';
import logo from '../assets/logo-transparent.png';
import introVideo from '../assets/sample_15s.mp4';
import { motion } from 'framer-motion';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

export default function Intro({ setFinished }) {
    const introVideoDuration = 2000;
    const animationDuration = 4000;
    const labelDuration = 1000;
    const logoDuration = 1000;
    const transitionWaitDuration = 1000;

    const [loading, setLoading] = useState(true);
    const [topPosition, setTopPosition] = useState('20%');
    const [logoElement, setLogoElement] = useState(
        <div
            className="playtify-logo"
        />
    );

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, introVideoDuration);
    })

    useEffect(() => {
        setTimeout(() => {
            setTopPosition('30%');
            setTimeout(() => {
                setLogoElement(
                    <motion.img
                        className="playtify-logo"
                        src={logo}
                        alt="playtify-logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: logoDuration / 1000,
                            ease: 'easeInOut'
                        }}
                    />
                );
                setTimeout(() => {
                    setFinished(true);
                }, logoDuration + transitionWaitDuration);
            }, labelDuration);
        }, introVideoDuration + animationDuration);
    }, []);

    if (loading) {
        return (
            <DeviceFrameset device="iPhone 8" color="black">
                <div>
                    <video className="video" controls autoPlay muted playsInline loop>
                        <source src={introVideo} type="video/mp4" />
                    </video>
                </div>
            </DeviceFrameset>
        );
    }


    return (
        <motion.div
            className='container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0 }}
        >
            <motion.div
                className="intro-container"
                initial={{ top: '20%' }}
                animate={{ top: topPosition }}
                transition={{ duration: labelDuration / 1000, ease: 'easeInOut' }}
            >
                {logoElement}
                <AnimatedText />
            </motion.div>
        </motion.div>
    );
}