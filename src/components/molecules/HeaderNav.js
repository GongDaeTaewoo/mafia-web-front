import React from 'react';
import Icon from '../atoms/Icon';


function HeaderNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link" href="/" style={{ color: 'white' }}>홈</a>
                        <a className="nav-link" href="/" style={{ color: 'white' }}>랭킹</a>
                    </div>
                </div>
                <div className="d-flex">
                    <Icon variant='2rem' />
                </div>
            </div>
        </nav>
    );

};

export default HeaderNav;
