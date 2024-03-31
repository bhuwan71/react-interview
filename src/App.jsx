import React, { useState, useEffect, useRef } from 'react';

const AnimatedDiv = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`animated-div ${isVisible ? 'isVisible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

const VerticalScrollView = ({ start, end }) => {
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNumbers = [];
      for (let i = start; i <= end; i++) {
        newNumbers.push(i);
      }
      setNumbers(newNumbers);
    }, 3000);

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div style={{ height: 'auto', overflowY: 'auto', border: '1px solid black' }}>
      {numbers.map((num, index) => (
        <AnimatedDiv key={index} delay={(index + 1) * 0.5}>
          {num}
        </AnimatedDiv>
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
    }, 3000); // Change interval to 3000 milliseconds for every 3 seconds

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div style={{ width: 'auto', overflowX: 'auto', border: '1px solid black', display: 'flex', gap: '10px' }}>
      {numbers.map((num, index) => (
        <AnimatedDiv key={index} delay={(index + 1) * 0.5}>
          {num}
        </AnimatedDiv>
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


// resume at l
// three +