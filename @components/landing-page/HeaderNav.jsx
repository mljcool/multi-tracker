import React, { Fragment } from 'react';

function HeaderNav() {
  return (
    <Fragment>
      <header id='header' className='header fixed-top'>
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='index.html' className='logo d-flex align-items-center'>
            <img src='assets/img/logo.png' alt='' />
            <span>MULTI TRACKER</span>
          </a>

          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <a href='#'>FEATURE</a>
              </li>
              <li>
                <a className='nav-link' href='#contact'>
                  CONCEPT
                </a>
              </li>
              <li>
                <a className='contactUs ' href='#about'>
                  CONTACT US
                </a>
              </li>
            </ul>
            <i className='bi bi-list mobile-nav-toggle'></i>
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default HeaderNav;
