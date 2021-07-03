import React from 'react';
import MostPopularItem from '../most_popular_item/most_popular_item';
import styles from './most_popular.module.css';

const MostPopular = ({ videos }) => {
  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return (
          <MostPopularItem key={video.id} video={video}  />
        );
      })}
    </div>
  );
};

export default MostPopular;
