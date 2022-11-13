import React from 'react';
import s from './Header.module.scss';
import GlobalSvgSelector from '../../assets/images/icons/global/GlobalSvgSelector';

function Header() {
  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}><GlobalSvgSelector id="change-theme" /></div>
      </div>
    </div>
  );
}

export default Header;
