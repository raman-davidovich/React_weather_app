import React from 'react';
import s from './Days.module.scss';
import Card from './Card';

export interface Day {
  day: string,
  dayInfo: string,
  iconId: string,
  tempDay: string,
  tempNight: string,
  info: string,
}

function Days() {
  const days: Array<Day> = [
    {
      day: 'Today',
      dayInfo: '28 Aug',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Tomorrow',
      dayInfo: '29 Aug',
      iconId: 'small_rain_sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Small rain and sun',
    },
    {
      day: 'Wednesday',
      dayInfo: '30 Aug',
      iconId: 'small_rain',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Small rain',
    },
    {
      day: 'Thursday',
      dayInfo: '31 Aug',
      iconId: 'mainly_cloudy',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Friday',
      dayInfo: '1 Sep',
      iconId: 'rain',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Saturday',
      dayInfo: '2 Sep',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Cloudy',
    },
    {
      day: 'Sunday',
      dayInfo: '3 Sep',
      iconId: 'sun',
      tempDay: '+18',
      tempNight: '+15',
      info: 'Cloudy',
    },
  ];
  return (
    <div className={s.days}>
      {
        days.map((day: Day) => <Card day={day} key={day.day} />)
      }
    </div>
  );
}

export default Days;
