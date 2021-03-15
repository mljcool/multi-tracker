import React from 'react';

function BunosFeatureSection() {
  return (
    <section
      id='bunos-sections'
      className='bunos-sections d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column justify-content-center'>
            <h2 className='feat-h'>Bonus feature</h2>
            <h1>
              CELEBRATE <br /> THE WINNING <br />
              MOMENT WITH <br /> YOUR MATES
            </h1>
            <h2 className='bunos-desc'>
              if your multi isn't going well, check in to see how your
              <br />
              mates are going and what legs they have to go. This <br />
              feature allows you to see if mate is going to have a win
              <br />
              and ride those final legs together.
            </h2>
            <div>
              <div className='text-center text-lg-start'>
                <a
                  href='#contact'
                  className='btn-get-started btn-effects scrollto d-inline-flex align-items-center justify-content-center align-self-center'>
                  <span>CONTACT US</span>
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 hero-img'>
            <img
              src='/img/bunos-section/bunos-feature.png'
              className='img-fluid'
              alt=''
            />
            <div className='bunos-animations'>
              <div className='balls'>
                <img
                  src='/img/bunos-section/animations/ball1.png'
                  className='img-fluid basket-ball'
                  data-aos='fade-up-left'
                  data-aos-delay='200'
                  alt=''
                />
                <img
                  src='/img/bunos-section/animations/ball2.png'
                  className='img-fluid soccer-ball'
                  data-aos='fade-up-left'
                  data-aos-delay='200'
                  alt=''
                />
                <img
                  src='/img/bunos-section/animations/ball3.png'
                  className='img-fluid foot-ball'
                  data-aos='fade-up-left'
                  data-aos-delay='200'
                  alt=''
                />
              </div>
              <div className='mens'>
                <img
                  src='/img/bunos-section/animations/m1.png'
                  className='img-fluid men1'
                  data-aos='fade-down-right'
                  data-aos-delay='200'
                  alt=''
                />
                <img
                  src='/img/bunos-section/animations/m2.png'
                  className='img-fluid men2'
                  data-aos='fade-down-right'
                  data-aos-delay='200'
                  alt=''
                />
                <img
                  src='/img/bunos-section/animations/m3.png'
                  className='img-fluid men3'
                  data-aos='fade-down-right'
                  data-aos-delay='200'
                  alt=''
                />
              </div>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BunosFeatureSection;
