import Intro from './components/Intro';
import Content from './components/Content';
import './App.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  useEffect(() => {
    if (introFinished) {
      console.log('Done');
    }
  }, [introFinished]);

  return (
    <div className='app'>
      <AnimatePresence>
        <Intro key={'intro'} setFinished={setIntroFinished} />
        <Content key={'content'} />
      </AnimatePresence>
    </div>
  );
}