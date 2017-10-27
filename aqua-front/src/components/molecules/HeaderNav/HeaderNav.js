import React from 'react';
import styles from './HeaderNav.scss';
import classNames from 'classnames/bind';
import { FlexBox, NavItem } from 'components';

const cx = classNames.bind(styles);

const HeaderNav = () => {
  return (
    <FlexBox row
      className={cx('header-nav')}>
      <NavItem to="/aic">
        Ai코스
      </NavItem>
      <NavItem to="/oper">
        실무코스
      </NavItem>
      <NavItem to="/star">
        스타코스
      </NavItem>
    </FlexBox>
  );
};

export default HeaderNav;