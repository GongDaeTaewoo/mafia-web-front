import React from 'react';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import MainPage from './pages/MainPage';
import SignupPage from './pages/signup/SignupPage';
import OAuthSignupPage from './pages/signup/OAuthSignupPage';
import RankDetailPage from './pages/RankDetailPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SearchPage from './pages/SearchPage';
import HeaderNav from './components/molecules/HeaderNav';

function App() {
  return (
    <RecoilRoot>
      <HeaderNav />
      <Routes>
        <Route path="/searchPage/:page" element={<SearchPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Outlet />}>
          <Route path="" element={<SignupPage />} />
          <Route path="oauth" element={<OAuthSignupPage />} />
        </Route>
        <Route path="/rank" element={<RankDetailPage />} />
        <Route path="/mypage" element={<Outlet />}>
          <Route path="pages/:id" element={<MyPage />} />
        </Route>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
