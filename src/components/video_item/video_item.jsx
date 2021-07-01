import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video: { snippet } }) => {
  return (
    <article className={styles.video_container}>
      <img
        src={snippet.thumbnails.medium.url}
        className={styles.thumbnail}
        alt='thumbnail'
      />
      <div className={styles.video_desc}>
        <img
          src='https://www.pinclipart.com/picdir/middle/530-5305994_icon-youtube-logo-png-clipart.png'
          className={styles.channel_image}
          alt='channel'
        />

        <div className={styles.video_details}>
          <h4 className={styles.video_title}>{snippet.title}</h4>
          <h4 className={styles.channel_title}>{snippet.channelTitle}</h4>
          <div className={styles.video_metadata}>
            <span>656k views</span> • <span>6 months ago</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VideoItem;
