import React from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';
import userinfoState from '../../recoils/userinfoState';

function HeaderNav() {
  const navigate = useNavigate();
  const resetUserinfo = useResetRecoilState(userinfoState);
  const userinfo = useRecoilValue(userinfoState);
  const loginDropdown = (
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark bg-dark">
      <li>
        <a
          className="dropdown-item"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/mypage/pages/${userinfo.id}`);
          }}
        >
          마이페이지
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a
          className="dropdown-item"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            resetUserinfo();
          }}
        >
          로그아웃
        </a>
      </li>
    </ul>
  );
  const anonymousDropdown = (
    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark bg-dark">
      <li>
        <a
          className="dropdown-item"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/signup`);
          }}
        >
          회원가입
        </a>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a
          className="dropdown-item"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/login`);
          }}
        >
          로그인
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/`);
          }}
        >
          Mafia.gg
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/`);
                }}
              >
                홈
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/rank`);
                }}
              >
                랭킹
              </a>
            </li>
          </ul>
          <div className="nav-item dropdown" data-bs-toggle="dropdown">
            <Button className="nav-link dropdown-toggle">
              <Icon variant="2rem" />
            </Button>
            {userinfo.id === undefined ? anonymousDropdown : loginDropdown}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNav;
