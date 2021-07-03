import React, { useState } from 'react';
import styles from './search_item.module.css';
import { Link } from 'react-router-dom';

const SearchItem = ({ video }) => {
  const path = `/watch/${video.id}`;
  const { title, description, channelTitle, thumbnails } = video.snippet;
  // Truncate description of the video
  const formatDesc = (str) => {
    if (str.length < 150) {
      return str;
    } else {
      return `${str.substr(0, 149)}...`;
    }
  };
  const formattedDesc = formatDesc(description);
  console.log(formattedDesc);
  return (
    <Link to={{ pathname: path, data: video }} replace>
      <div className={styles.video_container}>
        <img
          src={thumbnails.medium.url}
          alt='thumbnail'
          className={styles.thumbnail}
        />
        <div className={styles.video_details}>
          <h3 className={styles.video_title}>{title}</h3>
          <div className={styles.video_metadata}>
            <span>656k views</span> • <span>6 months ago</span>
          </div>
          <div className={styles.channel}>
            <img
              src='https://www.pinclipart.com/picdir/middle/530-5305994_icon-youtube-logo-png-clipart.png'
              alt='logo'
              className={styles.channel_image}
            />
            <h4 className={styles.channel_title}>{channelTitle}</h4>
          </div>
          <p className={styles.video_desc}>{formattedDesc}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchItem;
