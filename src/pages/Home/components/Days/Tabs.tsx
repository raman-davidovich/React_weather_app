import React from 'react';
import s from './Days.module.scss';

interface Tab {
  value: string;
}

function Tabs() {
  const tabs: Array<Tab> = [
    {
      value: 'Week',
    },
    {
      value: '10 days',
    },
    {
      value: 'Month',
    },
  ];
  return (
    <div className={s.tabs}>
      <div className={s.tabs__wrapper}>
        {
          tabs.map((tab: Tab) => <div className={s.tab} key={tab.value}>{tab.value}</div>)
        }
      </div>
      <div className={s.cancel}>Cancel</div>
    </div>
  );
}

export default Tabs;
