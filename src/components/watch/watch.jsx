import React from 'react';
import styles from './watch.module.css';
import ReactPlayer from 'react-player';
import { useLocation, useParams } from 'react-router-dom';
import { RiThumbUpFill, RiThumbDownFill } from 'react-icons/ri';
import moment from 'moment';

const Watch = (props) => {
  const video = useLocation();
  // url for youtube video
  const url = `https://www.youtube.com/watch?v=${video.id}`;
  const { title, channelTitle, description, publishTime } = video.data.snippet;
  // format date using moment (required format ex: Jan 14, 1992)
  const formattedTime = moment(publishTime).format('MMM DD, YYYY');
  return (
    <div className={styles.container}>
      <div className={styles.player_wrapper}>
        <ReactPlayer
          className={styles.react_player}
          controls
          url={url}
          width='100%'
          height='100%'
        />
        <div className={styles.desc_container}>
          <div className={styles.video_desc}>
            <div className={styles.title_header}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.date}>
                <h4>{formattedTime}</h4>
                <div className={styles.buttons}>
                  <button>
                    <RiThumbUpFill className={styles.like} />
                  </button>
                  <button>
                    <RiThumbDownFill className={styles.dislike} />
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.channel_desc}>
              <img
                src='https://www.pinclipart.com/picdir/middle/530-5305994_icon-youtube-logo-png-clipart.png'
                alt='logo'
                className={styles.channel_img}
              />
              <div className={styles.channel_details}>
                <div className={styles.channel_header}>
                  <h4 className={styles.channel_title}>{channelTitle}</h4>
                  <button className={styles.btn_subscribe}>SUBSCRIBE</button>
                </div>
                <p className={styles.desc}>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
