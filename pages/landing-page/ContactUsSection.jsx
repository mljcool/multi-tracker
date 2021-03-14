import React from 'react';

function ContacUsSection() {
  return (
    <section id='contact' className='contact'>
      <div className='container contact-section'>
        <header className='section-header'>
          <p className='label-color-white'>CONTACT US</p>
        </header>
      </div>
      <div className='form-wrapper'>
        <div className='col-md-12 form-contact'>
          <form method='post' className='php-email-form'>
            <div className='row gy-4'>
              <div className='col-md-12'>
                <label className='label-color-white padded-bottom'>
                  Your Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  name='name'
                  required
                />
              </div>
              <div className='col-md-12'>
                <label
                  htmlFor='email'
                  className='label-color-white padded-bottom '>
                  Your email
                </label>
                <input
                  type='email'
                  className='form-control'
                  name='email'
                  required
                />
              </div>

              <div className='col-md-12'>
                <label className='label-color-white padded-bottom '>
                  Your message
                </label>
                <textarea
                  className='form-control'
                  name='message'
                  rows='6'
                  required></textarea>
              </div>

              <div className='col-md-12 text-center'>
                <button type='submit'>Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='form-footer'>
        <img
          src='./img/logo/tracker_horizental_logo.svg'
          className='img-fluid'
        />
        <div className='copy-right'>&#169; 2021 MULTI TRACKER</div>
      </div>
    </section>
  );
}

export default ContacUsSection;
