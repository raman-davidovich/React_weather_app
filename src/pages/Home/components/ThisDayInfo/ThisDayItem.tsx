import React from 'react';
import { Item } from './ThisDayInfo';
import s from './ThisDayInfo.module.scss';
import IndicatorSvgSelector from '../../../../assets/icons/indicators/IndicatorSvgSelector';

interface Props {
  item: Item;
}

function ThisDayItem({ item }: Props) {
  const { iconId, name, value } = item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={iconId} />
      </div>
      <div className={s.indicator__name}>{name}</div>
      <div className={s.indicator__value}>{value}</div>
    </div>
  );
}

export default ThisDayItem;
