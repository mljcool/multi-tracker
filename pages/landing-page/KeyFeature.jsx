import React from 'react';

function KeyFeature() {
  return (
    <section
      id='key-features-sections'
      className='key-features-sections d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 hero-img'>
            <div className='feature-bg-animation'>
              <img
                src='/img/key-features/animations/basketball.png'
                className='img-fluid basketball '
                alt='Tracking-Multi-Tracker'
                data-aos='fade-up-right'
              />
              <img
                src='/img/key-features/animations/football.png'
                className='img-fluid football '
                alt='Tracking-Multi-Tracker'
                data-aos='fade-down-left'
              />
            </div>
            <img
              src='/img/key-features/Tracking.png'
              className='img-fluid tracker-img'
              alt='Tracking-Multi-Tracker'
            />
          </div>
          <div className='col-lg-6 d-flex flex-column key-feature-details'>
            <h2 className='feat-h'>Key Features</h2>
            <h1>
              A BETTER WAY TO <br /> ENGAGE WITH <br /> THE GAME
            </h1>

            <div className='feature-lists'>
              <div className='box-list'>
                <div className='custom-icons'>
                  <a className='box-icons'></a>
                  <img
                    src='/img/key-features/icon-material-people.svg'
                    className='img-fluid c-icons-ticket'
                    alt=''
                  />
                </div>
                <div className='feature-details'>
                  <span className='feature-title'>FIND YOUR PLAYER EASILY</span>
                  <p>
                    See which team your player is from whe <br />
                    including them in you multi.
                  </p>
                </div>
              </div>
              <div className='box-list'>
                <div className='custom-icons'>
                  <a className='box-icons'></a>
                  <img
                    src='/img/key-features/icon-material-track-changes.svg'
                    className='img-fluid c-icons-ticket'
                    alt=''
                  />
                </div>
                <div className='feature-details'>
                  <span className='feature-title'>TRACK YOUR MULTI</span>
                  <p>
                    Allowing users to track as many legs as they
                    <br /> would like.
                  </p>
                </div>
              </div>
              <div className='box-list'>
                <div className='custom-icons'>
                  <a className='box-icons'></a>
                  <img
                    src='/img/key-features/icon-ionic-ios-paper.svg'
                    className='img-fluid c-icons-ticket'
                    alt=''
                  />
                </div>
                <div className='feature-details'>
                  <span className='feature-title'>REALTIME RESULTS</span>
                  <p>
                    See those green ticks appear straight away as
                    <br />
                    soon as that leg is completed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KeyFeature;
