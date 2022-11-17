import React from 'react';
import s from './Days.module.scss';
import { Day } from './Days';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

interface Props {
  day: Day;
}

function Card({ day }: Props) {
  return (
    <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day.dayInfo}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={day.iconId} />
      </div>
      <div className={s.temp__day}>{day.tempDay}</div>
      <div className={s.temp__night}>{day.tempNight}</div>
      <div className={s.day__info}>{day.info}</div>
    </div>
  );
}

export default Card;
