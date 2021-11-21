import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Landing from './pages/Landing';
import Weather from './pages/Weather';
import SignIn from './pages/SignIn';
import PrivateRoute from './objects/PrivateRoute';
import PublicRoute from './objects/PublicRoute';
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='forecast' element={<PrivateRoute/>}>
        <Route path='' element={<Weather />}/>
      </Route>
      <Route path='login' element={<PublicRoute/>}>
        <Route path='' element={<SignIn />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
