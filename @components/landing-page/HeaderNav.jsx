import React, { Fragment, useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';

function HeaderNav() {
  const [toggleClass, settoggleClass] = useState('');
  useEffect(() => {
    if (process.browser) {
      const select = (el, all = false) => {
        el = el.trim();
        if (all) {
          return [...document.querySelectorAll(el)];
        } else {
          return document.querySelector(el);
        }
      };
    }
  }, []);
  return (
    <Fragment>
      <header id='header' className='header'>
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <a href='index.html' className='logo d-flex align-items-center'>
            <img src='/img/logo/tracker_horizental_logo_BK.svg' alt='' />
          </a>

          <nav id='navbar' className={`navbar ${toggleClass}`}>
            <ul>
              <li>
                <a
                  href='#bunos-sections'
                  onClick={() => {
                    settoggleClass('');
                  }}>
                  FEATURE
                </a>
              </li>
              <li>
                <a
                  className='nav-link'
                  onClick={() => {
                    settoggleClass('');
                  }}
                  href='#key-features-sections'>
                  CONCEPT
                </a>
              </li>
              <li>
                <a
                  className='contactUs btn-effects'
                  href='#contact'
                  onClick={() => {
                    settoggleClass('');
                  }}>
                  <span>CONTACT US</span>
                </a>
              </li>
            </ul>
            {toggleClass === 'navbar-mobile' ? (
              <Icon.XCircle
                size='20px'
                className='mobile-nav-toggle bi-x'
                color='white'
                onClick={() => {
                  settoggleClass('');
                }}
              />
            ) : (
              <Icon.List
                size='20px'
                className='mobile-nav-toggle'
                onClick={() => {
                  settoggleClass('navbar-mobile');
                }}
              />
            )}
          </nav>
        </div>
      </header>
    </Fragment>
  );
}

export default HeaderNav;
