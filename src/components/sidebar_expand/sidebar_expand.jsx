import React from 'react';
import styles from './sidebar_expand.module.css';

const SidebarExpand = ({ list, label }) => {
  return (
    <ul className={styles.sidebar_expand}>
      {label && <h4 className={styles.label}>{label}</h4>}
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

export default SidebarExpand;
