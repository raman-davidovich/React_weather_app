import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MonthStatistics from './pages/MonthStatistics/MonthStatistics';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>
    </div>
  );
}

export default App;
