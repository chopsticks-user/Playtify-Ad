import Intro from './components/Intro';
import Content from './components/Content';
import './App.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [child, setChild] = useState(
    <Intro setFinished={setIntroFinished} />
  );

  useEffect(() => {
    if (introFinished) {
      setChild(<Content />);
    }
  }, [introFinished]);

  return (
    <div className='app'>
      <AnimatePresence mode='wait'>
        {child}
      </AnimatePresence>
    </div>
  );
}