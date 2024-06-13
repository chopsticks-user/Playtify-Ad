import Intro from "./components/Intro";
import Content from "./components/Content";
import "./App.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        {!introFinished ? (
          <Intro setFinished={setIntroFinished} />
        ) : (
          <Content />
        )}
      </AnimatePresence>
    </div>
  );
}
