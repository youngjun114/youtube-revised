import React from 'react';
import styles from './search_item.module.css';

const SearchItem = ({ video: { snippet } }) => {
  // Truncate description of the video
  const truncate = (str) => {
    if (str.length < 150) {
      return str;
    } else {
      return `${str.substr(0, 149)}...`;
    }
  };
  return (
    <div className={styles.video_container}>
      <img
        src={snippet.thumbnails.medium.url}
        alt='thumbnail'
        className={styles.thumbnail}
      />
      <div className={styles.video_details}>
        <h3 className={styles.video_title}>{snippet.title}</h3>
        <div className={styles.video_metadata}>
          <span>656k views</span> • <span>6 months ago</span>
        </div>
        <div className={styles.channel}>
          <img
            src='https://www.pinclipart.com/picdir/middle/530-5305994_icon-youtube-logo-png-clipart.png'
            alt='logo'
            className={styles.channel_image}
          />
          <h4 className={styles.channel_title}>{snippet.channelTitle}</h4>
        </div>
        <p className={styles.video_desc}>{truncate(snippet.description)}</p>
      </div>
    </div>
  );
};

export default SearchItem;
