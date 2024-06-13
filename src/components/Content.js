import './Content.css';
import introVideo from '../assets/sample_15s.mp4';
import { DeviceFrameset } from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css'
import { motion } from 'framer-motion';


export default function Content() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.0 }}
        >
            <DeviceFrameset device="iPhone 8" color="black">
                <div>
                    <video className="video" controls autoPlay muted playsInline loop>
                        <source src={introVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </DeviceFrameset>
        </motion.div>
    );
}