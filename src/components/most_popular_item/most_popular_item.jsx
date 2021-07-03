import React, { useState } from 'react';
import styles from './most_popular_item.module.css';
import { Link } from 'react-router-dom';

const MostPopularItem = ({ video }) => {
  const path = `/watch/${video.id}`;
  const { title, channelTitle, thumbnails } = video.snippet;

  return (
    <Link to={{ pathname: path, data: video }} replace>
      <article className={styles.video_container}>
        <img
          src={thumbnails.medium.url}
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
            <h4 className={styles.video_title}>{title}</h4>
            <h4 className={styles.channel_title}>{channelTitle}</h4>
            <div className={styles.video_metadata}>
              <span>656k views</span> • <span>6 months ago</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MostPopularItem;
