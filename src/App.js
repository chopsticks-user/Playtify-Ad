import Intro from './components/Intro';
import './App.css';
import { useEffect, useState } from 'react';

export default function App() {
  const [scenceFinished, setScenceFinished] = useState(false);

  useEffect(() => {
    if (scenceFinished) {
      console.log('Done');
    }
  }, [scenceFinished]);

  return (
    <div className='app'>
      <Intro setFinished={setScenceFinished} />
    </div>
  );
}