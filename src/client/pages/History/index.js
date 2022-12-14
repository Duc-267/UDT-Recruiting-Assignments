import React, { useEffect, useState } from 'react';
import './History.scss';

const History = () => {
   const [calculations, setCalculations] = useState([]);
   useEffect(() => {
      setCalculations(JSON.parse(localStorage.getItem('calculations')) || []);
   }, []);
   return (
      <div className="history">
         <h1>History</h1>
         {calculations.map((calculation, index) => (
            <div key={index}>{calculation}</div>
         ))}
      </div>
   );
};

export default History;
