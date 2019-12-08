import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Button from '../Button/Button';
import { fetchImage } from '../../helpers/imageFetcher';

function App() {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const load = () => {
    setLoading(true)
    fetchImage().then(url => {
      setImage(url);
      setLoading(false);
    })
  }
  useEffect(() => {
    load()
  }, [])
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={image} alt="meme" />
      </div>
      <Button 
        className={styles.next}
        onClick={() => !loading ? load() : void 0 }
      >
        {loading ? 'Loading' : 'Next'}
      </Button>
    </div>
  );
}

export default App;
