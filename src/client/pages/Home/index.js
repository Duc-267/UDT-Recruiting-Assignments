import React from 'react';
import Keypad from './components/Keypad';
import DisplayScreen from './components/DisplayScreen';

const Home = () => {
   return (
      <div className="calc-wrapper">
         <DisplayScreen result={'0'} />
         <Keypad />
      </div>
   );
};

export default Home;
