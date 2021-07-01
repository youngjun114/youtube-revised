import React from 'react';
import styles from './search_list.module.css';
import SearchItem from '../search_item/search_item';

const SearchList = ({ videos }) => {
  console.log(videos);
  return (
    <div className={styles.container}>
      {videos.map((video) => {
        return <SearchItem video={video} key={video.id} />;
      })}
    </div>
  );
};

export default SearchList;
