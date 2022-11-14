import React from 'react';
import s from './Home.module.scss';
import ThisDay from './components/ThisDay/ThisDay';

function Home() {
  return (
    <div className={s.home}>
      <ThisDay />
    </div>
  );
}

export default Home;
