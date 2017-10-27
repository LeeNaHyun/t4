import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import img from 'static/images/logo_white.png';

const cx = classNames.bind(styles);

const Logo = () => {
  return (
    <Link to="/">
      <img src={img} className={cx('logo')} />
      <span className={cx('logo-text')}>Aqua</span>
    </Link>
  );
};

export default Logo;