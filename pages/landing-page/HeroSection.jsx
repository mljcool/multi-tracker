import React, { Fragment } from 'react';

const HeroSection = () => {
  return (
    <Fragment>
      <div className='container animation-sequence'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='box' data-aos='fade-down-left' data-aos-delay='200'>
              <img
                src='/img/hero/seq-1.png'
                className='img-fluid seq-1'
                alt=''
              />
            </div>
          </div>

          <div className='col-lg-3 mt-3 mt-lg-0'>
            <div className='box' data-aos='fade-down-left' data-aos-delay='400'>
              <div className='custom-icons'>
                <img
                  src='/img/hero/seq-2.png'
                  className='img-fluid seq-2'
                  alt=''
                />
              </div>
            </div>
          </div>

          <div className='col-lg-3 mt-3 mt-lg-0'>
            <div className='box' data-aos='fade-down-left' data-aos-delay='600'>
              <img
                src='/img/hero/seq-3.png'
                className='img-fluid seq-3'
                alt=''
              />
            </div>
          </div>
          <div className='col-lg-3 mt-3 mt-lg-0'>
            <div className='box' data-aos='fade-down-left' data-aos-delay='600'>
              <img
                src='/img/hero/seq-4.png'
                className='img-fluid seq-4'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <section id='hero' className='hero d-flex align-items-center'>
        {/* <div className='animate-sequence'>
          <div data-aos='fade-down-left' data-aos-delay='200'>
            <img src='/img/hero/seq-1.png' />
          </div>
          <div data-aos='fade-down-left' data-aos-delay='400'>
            <img src='/img/hero/seq-2.png' />
          </div>
          <div data-aos='fade-down-left' data-aos-delay='800'>
            <img src='/img/hero/seq-3.png' />
          </div>
          <div data-aos='fade-down-left' data-aos-delay='600'>
            <img src='/img/hero/seq-4.png' />
          </div>
        </div> */}
        <div className='background-clip'>
          <div className='background-clip-two'></div>
        </div>
        <div className='container'>
          <div className='row'>
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
      </section>
    </Fragment>
  );
};

export default HeroSection;
