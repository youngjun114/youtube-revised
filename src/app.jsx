import React, { useState, useEffect } from 'react';
import Header from './components/header/header';
import MostPopular from './components/most_popular/most_popular';
import SearchList from './components/search_result/search_list';
import Sidebar from './components/sidebar/sidebar';
import styles from './app.module.css';
import { Route, Switch } from 'react-router-dom';
import Watch from './components/watch/watch';

function App({ youtube }) {
  const [collapse, setCollapse] = useState(false);
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState();
  const [query, setQuery] = useState('');

  const onClickVideo = (video) => {
    setVideo(video);
  };

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
      <Switch>
        {/* Main page showing list of most popular videos */}
        <Route exact path='/'>
          <Header handleMenu={handleMenu} onSearch={onSearch} />
          <Sidebar collapse={collapse} />
          <div className={styles.content}>
            <div className={styles.content_container}>
              <MostPopular onClickVideo={onClickVideo} videos={videos} />
            </div>
          </div>
        </Route>
        {/* List of search results */}
        <Route path='/search'>
          <Header handleMenu={handleMenu} onSearch={onSearch} />
          <Sidebar collapse={collapse} />
          <div className={styles.content}>
            <div className={styles.content_container}>
              <SearchList videos={videos} />
            </div>
          </div>
        </Route>
        {/* Video Player */}
        <Route path='/watch/:id'>
          <Header onSearch={onSearch} />
          <div className={styles.content}>
            <Watch />
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
