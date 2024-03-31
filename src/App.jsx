import React, { useState, useEffect } from 'react';

const VerticalScrollView = ({ start, end }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumbers = [];
      for (let i = start; i <= end; i++) {
        newNumbers.push(i);
      }
      setNumbers(newNumbers);
    }, 100);

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div style={{ height: '300px', overflowY: 'auto', border: '1px solid black' }}>
      {numbers.map((num, index) => (
        <div key={index} className="animated-div" style={{ backgroundColor: index % 2 === 0 ? '#e8e8e8' : '#f0f0f0', padding: '5px', margin: '5px' }}>{num}</div>
      ))}
    </div>
  );
};

const HorizontalScrollView = ({ start, end }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumbers = [];
      for (let i = start; i <= end; i++) {
        newNumbers.push(i);
      }
      setNumbers(newNumbers);
    }, 100);

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div style={{ width: 'auto', overflowX: 'auto', border: '1px solid black', display: 'flex', gap: '10px' }}>
      {numbers.map((num, index) => (
        <div key={index} className="animated-div" style={{ backgroundColor: index % 2 === 0 ? '#cfe8fc' : '#a8d8ea', padding: '10px', borderRadius: '5px' }}>{num}</div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <VerticalScrollView start={0} end={100} />
      <HorizontalScrollView start={100} end={200} />
      <VerticalScrollView start={200} end={300} />
    </div>
  );
};

export default App;
