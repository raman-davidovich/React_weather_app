import React from 'react';
import Select from 'react-select';
import s from './Header.module.scss';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

type SelectOption = {
  value: string,
  label: string,
}

function Header() {
  const options: Array<SelectOption> = [
    { value: 'city-1', label: 'Baranovichi' },
    { value: 'city-2', label: 'Minsk' },
    { value: 'city-3', label: 'New York' },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}><GlobalSvgSelector id="header-logo" /></div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
}

export default Header;
