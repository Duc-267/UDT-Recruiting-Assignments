import { Route, Routes } from 'react-router-dom';
import React from 'react';
import routes from './routes';
import './App.scss';

const App = () => {
   return (
      <Routes>
         {routes.map((route, index) => (
            <Route key={index} path={route.path} element={<route.component />} />
         ))}
      </Routes>
   );
};

export default App;
