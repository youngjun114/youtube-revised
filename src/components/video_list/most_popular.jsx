import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './most_popular.module.css';

const MostPopular = ({ videos }) => {
  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return <VideoItem key={video.id} video={video} />;
      })}
    </div>
  );
};

export default MostPopular;
