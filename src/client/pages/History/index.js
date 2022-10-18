import React, { useEffect } from 'react';

const History = () => {
   useEffect(() => {
      console.log('hi');
   }, []);
   console.log('hi');
   return (
      <div>
         <h1>History</h1>
      </div>
   );
};

export default History;
