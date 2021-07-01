import React, { useRef } from 'react';
import styles from './header.module.css';
import {
  GiHamburgerMenu,
  IoSearchOutline,
  BsFillMicFill,
  RiVideoAddFill,
  CgMenuGridR,
  IoNotifications,
} from 'react-icons/all';
import { useHistory } from 'react-router-dom';

const Header = ({ handleMenu, onSearch }) => {
  const inputRef = useRef();
  const formRef = useRef();
  const history = useHistory();

  // const handleClick = () => {
  //   handleMenu();
  // };

  // When search button is clicked, the input result will be passed to search function in App component as a query, then the page will be re-directed to search params.
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = inputRef.current.value;
    formRef.current.reset();
    onSearch(result);
    history.push('/search?q=' + result);
  };

  // Does same function as handleSubmit, but when Enter key is pressed instead of clicking button.
  const onKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit(e);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.header_left}>
        <img src='/images/logo.png' alt='logo' className={styles.logo} />
      </div>
      <div className={styles.header_mid}>
        <form
          ref={formRef}
          className={styles.search_form}
          onSubmit={handleSubmit}
        >
          <input
            ref={inputRef}
            type='text'
            className={styles.search_input}
            onKeyPress={onKeyPress}
          />
          <button type='submit' className={styles.search_btn}>
            <IoSearchOutline className={styles.search_icon} />
          </button>
        </form>
        <BsFillMicFill className={styles.header_icon} />
      </div>
      <div className={styles.header_right}>
        <button className={styles.header_btn}>
          <RiVideoAddFill className={styles.header_icon} />
        </button>
        <button className={styles.header_btn}>
          <CgMenuGridR className={styles.header_icon} />
        </button>
        <button className={styles.header_btn}>
          <IoNotifications className={styles.header_icon} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
