import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Content from './components/content/content';
import styles from './app.module.css';

function App({ youtube }) {
  const [collapse, setCollapse] = useState(false);
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  // Update state if the user clicks menu button in Head Component
  const handleMenu = () => {
    setCollapse(!collapse);
  };

  // Update state with search result
  const onSearch = (query) => {
    youtube
      .search(query) //
      .then(setQuery(query))
      .then((videos) => setVideos(videos));
  };

  // Get Most Popular Video List from Youtube API, then update state
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app_page}>
      <Header handleMenu={handleMenu} onSearch={onSearch} />
      <Sidebar collapse={collapse} />
      <div className={styles.content}>
        <Content videos={videos} />
      </div>
    </div>
  );
}

export default App;
