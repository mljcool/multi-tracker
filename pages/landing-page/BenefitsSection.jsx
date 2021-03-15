import React from 'react';

function BenefitsSection() {
  return (
    <section id='benefits' className='benefits'>
      <div className='container container-benefits'>
        <header className='section-header'>
          <h2 className='benefits-title'>Benefits</h2>
          <p>WHY MULTI TRACKER</p>
        </header>

        <div className='row'>
          <div className='col-lg-4'>
            <div className='box' >
              <div className='custom-icons'>
                <a className='box-icons'> </a>
                <img
                  src='/img/benefits-icons/icon-ionic-ios-tv.svg'
                  className='img-fluid c-icons-tv'
                  alt=''
                />
              </div>
              <p>
                Don't risk missing out on watching the game cause you are too
                busy checking on your multi.
              </p>
            </div>
          </div>

          <div className='col-lg-4 mt-4 mt-lg-0'>
            <div className='box' >
              <div className='custom-icons'>
                <a className='box-icons'></a>
                <img
                  src='/img/benefits-icons/ico-awesome-ticket-alt.svg'
                  className='img-fluid c-icons-ticket'
                  alt=''
                />
              </div>
              <p>
                One page, one multi, <br />
                many legs. See just how <br />
                close you are in securing
                <br /> that luscious green stick
              </p>
            </div>
          </div>

          <div className='col-lg-4 mt-4 mt-lg-0'>
            <div className='box' >
              <div className='custom-icons'>
                <a className='box-icons'></a>
                <img
                  src='/img/benefits-icons/icon-material-timelapse.svg'
                  className='img-fluid c-icons-timelapse'
                  alt=''
                />
              </div>
              <p>
                Multi Tracker helping the
                <br /> user to save time is what
                <br /> we are all about.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
