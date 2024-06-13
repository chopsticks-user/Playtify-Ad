import './Intro.css';
import AnimatedText from "./AnimatedText";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-transparent.png';
import introVideo from '../assets/sample_15s.mp4';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'

export default function Intro() {
    const loadingDuration = 15000;
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
        }, loadingDuration);
    })

    useEffect(() => {
        setTimeout(() => {
            console.log('Done');
            setTopPosition('30%');
            setTimeout(() => {
                setLogoElement(
                    <motion.img
                        className="playtify-logo"
                        src={logo}
                        alt="playtify-logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                    />
                )
            }, 1000);
        }, loadingDuration + 4000);
    }, []);

    if (loading) {
        return (
            <DeviceFrameset device="iPhone 8" color="black">
                <div>
                    <video className="video" controls autoPlay muted playsInline loop>
                        <source src={introVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </DeviceFrameset>
        );
    }


    return (
        <motion.div
            className="container"
            initial={{ top: '20%' }}
            animate={{ top: topPosition }}
            transition={{ duration: 1, ease: 'easeInOut' }}
        >
            {logoElement}
            <AnimatedText />
        </motion.div>
    );
}