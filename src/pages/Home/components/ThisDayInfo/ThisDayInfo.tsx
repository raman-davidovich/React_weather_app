import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/Cloud.svg';
import ThisDayItem from './ThisDayItem';

export interface Item {
  iconId: string;
  name: string;
  value: string;
}

function ThisDayInfo() {
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
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        { items.map((item: Item) => <ThisDayItem key={item.iconId} item={item} />) }
      </div>
      <img src={cloud} alt="Cloud" className={s.cloud__img} />
    </div>
  );
}

export default ThisDayInfo;
