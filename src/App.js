import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/signup/SignupPage';
import OAuthSignupPage from './pages/signup/OAuthSignupPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<Outlet />}>
        <Route path="" element={<SignupPage />} />
        <Route path="oauth" element={<OAuthSignupPage />} />
      </Route>
    </Routes>
  );
}

export default App;
