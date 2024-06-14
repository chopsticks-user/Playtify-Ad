import "./Content.css";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import loginVideo from "../assets/login.mov";
import addSongsVideo from "../assets/add-songs.mp4";
import genresGeneratedVideo from "../assets/genres-generated.mp4";
import editPlaylistVideo from "../assets/edit-playlist.mp4";
import personalizedPlaylistsVideo from "../assets/personalized-playlists.mp4";
import filterPlaylistsVideo from "../assets/filter-playlists.mp4";
import recommendationsVideo from "../assets/recommendations.mp4";
import newTracksUpdatedVideo from "../assets/new-tracks-updated.mp4";

function Scene({ src }) {
    return (
        <motion.div
            key={src}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0" }}
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
        duration: 4000,
        element: <Scene src={loginVideo} key={0} />,
    },
    {
        duration: 8000,
        element: <Scene src={addSongsVideo} key={1} />,
    },
    {
        duration: 5000,
        element: <Scene src={genresGeneratedVideo} key={2} />,
    },
    {
        duration: 4000,
        element: <Scene src={editPlaylistVideo} key={3} />,
    },
    {
        duration: 4000,
        element: <Scene src={personalizedPlaylistsVideo} key={4} />,
    },
    {
        duration: 7000,
        element: <Scene src={filterPlaylistsVideo} key={5} />,
    },
    {
        duration: 8000,
        element: <Scene src={recommendationsVideo} key={6} />,
    },
    {
        duration: 5000,
        element: <Scene src={newTracksUpdatedVideo} key={7} />,
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
            <DeviceFrameset device="iPhone X" color="black">
                <AnimatePresence mode="wait">
                    {scenes[sceneIndex].element}
                </AnimatePresence>
            </DeviceFrameset>
        </motion.div>
    );
}
