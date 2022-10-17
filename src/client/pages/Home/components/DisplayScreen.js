import React from 'react';

const DisplayScreen = ({ result }) => {
   return (
      <div className="output-wrapper">
         <div className="result">
            <h1>{result}</h1>
         </div>
      </div>
   );
};

export default DisplayScreen;
