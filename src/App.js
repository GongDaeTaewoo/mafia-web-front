import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignupPage from './pages/signup/SignupPage';
import OAuthSignupPage from './pages/signup/OAuthSignupPage';
import RankDetailPage from './pages/RankDetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<Outlet />}>
          <Route path="" element={<SignupPage />} />
          <Route path="oauth" element={<OAuthSignupPage />} />
        </Route>
        <Route path="/rank" element={<RankDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
