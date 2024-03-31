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
        <div key={index}>{num}</div>
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
    <div style={{ width: '300px', overflowX: 'auto', border: '1px solid black' }}>
      {numbers.map((num, index) => (
        <div key={index} style={{ display: 'inline-block' }}>{num}</div>
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
