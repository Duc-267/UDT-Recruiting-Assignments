import React from 'react';
import Keypad from './components/Keypad/Keypad';
import DisplayScreen from './components/DisplayScreen/DisplayScreen';
import './Home.scss';

const Home = () => {
   return (
      <div className="calculator-wrapper">
         <DisplayScreen result={'0'} />
         <Keypad />
      </div>
   );
};

export default Home;
