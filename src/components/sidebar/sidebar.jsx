import React from 'react';
import styles from './sidebar.module.css';
import {
  compactSidebar,
  sidebarHome,
  sidebarLibrary,
  bestOfYoutube,
  moreFromYoutube,
  sidebarSettings,
} from '../../data/sidebar_data';
import SidebarExpand from '../sidebar_expand/sidebar_expand';
import SidebarCollapse from '../sidebar_collapse/sidebar_collapse';

const Sidebar = ({ collapse }) => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar_container_collapse}>
        <SidebarCollapse list={compactSidebar} />
      </div>
      <div className={styles.sidebar_container_expand}>
        <SidebarExpand list={sidebarHome} />
        <SidebarExpand list={sidebarLibrary} />
        <SidebarExpand list={bestOfYoutube} label='BEST OF YOUTUBE' />
        <SidebarExpand list={moreFromYoutube} label='MORE FROM YOUTUBE' />
        <SidebarExpand list={sidebarSettings} />
      </div>
    </nav>
    // <nav
    //   className={
    //     collapse
    //       ? `${styles.sidebar} ${styles.collapse}`
    //       : `${styles.sidebar} ${styles.expand}`
    //   }
    // >
    //   {collapse ? (
    //     <div className={styles.sidebar_container}>
    //       <SidebarCollapse list={compactSidebar} />
    //     </div>
    //   ) : (
    //     <div className={styles.sidebar_container}>
    //       <SidebarExpand list={sidebarHome} />
    //       <SidebarExpand list={sidebarLibrary} />
    //       <SidebarExpand list={bestOfYoutube} label='BEST OF YOUTUBE' />
    //       <SidebarExpand list={moreFromYoutube} label='MORE FROM YOUTUBE' />
    //       <SidebarExpand list={sidebarSettings} />
    //     </div>
    //   )}
    // </nav>
  );
};

export default Sidebar;
