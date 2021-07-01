import React from 'react';
import styles from './sidebar_collapse.module.css';

const SidebarCollapse = ({ list }) => {
  return (
    <ul className={styles.sidebar_collapse}>
      {list.map((item, index) => {
        return (
          <li key={index} className={styles.sidebar_row}>
            <button className={styles.sidebar_btn}>
              <span className={styles.sidebar_icon}>{item.icon}</span>
              <h4 className={styles.sidebar_title}>{item.title}</h4>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarCollapse;
