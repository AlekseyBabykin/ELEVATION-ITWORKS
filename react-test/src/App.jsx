import React, { useEffect, useState } from 'react'; // Added import for React and useState

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { HOME_ROUTE, LOGIN_ROUTE } from './utils/const';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
