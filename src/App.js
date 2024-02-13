import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/signup/SignupPage';
import OAuthSignupPage from './pages/signup/OAuthSignupPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/aaa" element={<SearchPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Outlet />}>
          <Route path="" element={<SignupPage />} />
          <Route path="oauth" element={<OAuthSignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
