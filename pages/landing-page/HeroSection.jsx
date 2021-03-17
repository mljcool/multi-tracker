import React, { Fragment } from 'react';
import HeaderNav from '@components/landing-page/HeaderNav';
const HeroSection = () => {
  return (
    <Fragment>
      <section id='hero' className='hero d-flex align-items-center'>
        <div className='container hero-wrapper'>
          <HeaderNav />

          <div className='row'>
            <div className='animation-sequence'>
              <img
                src='img/hero/seq/seq-3.png'
                className='seq3'
                data-aos='fade-down-left'
              />
              <img
                src='img/hero/seq/seq-center-lap.png'
                className='seq-lap'
                data-aos='fade-down-left'
              />
              <img
                src='img/hero/seq/seq-2.png'
                className='seq-2'
                data-aos='fade-down-left'
              />
              <img
                src='img/hero/seq/seq-1.png'
                className='seq-1'
                data-aos='fade-down-left'
              />
            </div>
            <div className='col-lg-6 hero-img'>
              <img
                src='/img/hero/hero.png'
                className='img-fluid'
                data-aos='fade-up'
                data-aos-delay='200'
                alt=''
              />
            </div>
            <div className='col-lg-6 d-flex flex-column justify-content-center hero-details'>
              <h1 data-aos='fade-up'>
                TRACK <br /> YOUR MULTI, <br />
                REAL TIME.
              </h1>
              <h2 data-aos='fade-up' data-aos-delay='400'>
                With this easy to use app it will allow you to see how your
                multi is going by <br />a click of a button.
              </h2>
              <div data-aos='fade-up' data-aos-delay='600'>
                <div className='text-center text-lg-start'>
                  <a
                    href='#contact'
                    className='btn-get-started btn-effects scrollto d-inline-flex align-items-center justify-content-center align-self-center'>
                    <span>CONTACT US</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='image-phone'>
          <img
            src='/img/hero/hero.png'
            className='img-fluid'
            data-aos='fade-up'
            data-aos-delay='200'
            alt=''
          />
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;
