import './Intro.css';
import AnimatedText from "./AnimatedText";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from './logo-transparent.png';

export default function Intro() {
    const [topPosition, setTopPosition] = useState('20%');
    const [logoElement, setLogoElement] = useState(
        <div
            className="playtify-logo"
        />
    );

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
        }, 4000);
    }, []);


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