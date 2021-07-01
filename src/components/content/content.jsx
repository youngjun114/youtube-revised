import React from 'react';
import VideoList from '../video_list/video_list';
import SearchList from '../search_result/search_list';
import styles from './content.module.css';
import { Switch, Route } from 'react-router-dom';

const Content = ({ videos }) => {
  return (
    <div className={styles.content_container}>
      <Switch>
        <Route exact path='/'>
          <VideoList videos={videos} />
        </Route>
        <Route path='/search'>
          <SearchList videos={videos} />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
