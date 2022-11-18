import React from 'react';
import s from './Popup.module.scss';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo';
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

function Popup() {
  const items: Array<Item> = [
    {
      iconId: 'temp',
      name: 'Temperature',
      value: '20° -  feels like 17°',
    },
    {
      iconId: 'pressure',
      name: 'Pressure',
      value: '765 mmHg - normal',
    },
    {
      iconId: 'precipitation',
      name: 'Precipitation',
      value: 'No precipitation',
    },
    {
      iconId: 'wind',
      name: 'Wind',
      value: '3 m/s southwest - light breeze',
    },
  ];
  return (
    <>
      <div className={s.blur} />
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day__temp}>20°</div>
          <div className={s.day__name}>Wednesday</div>
          <div className={s.img}>
            <GlobalSvgSelector id="sun" />
          </div>
          <div className={s.day__time}>
            Time:
            <span> 21:54</span>
          </div>
          <div className={s.day__city}>
            City:
            <span> Baranovichi</span>
          </div>
        </div>
        <div className={s.this__day_info_items}>
          { items.map((item: Item) => <ThisDayItem key={item.iconId} item={item} />) }
        </div>
        <div className={s.close}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </>
  );
}

export default Popup;
