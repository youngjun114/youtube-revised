import React from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.css';

const VideoList = ({ videos }) => {
  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return <VideoItem key={video.id} video={video} />;
      })}
    </div>
  );
};

export default VideoList;
