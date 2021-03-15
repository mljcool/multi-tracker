import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import LazyLoad from 'react-lazyload';

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

const getData = () => {
  let slider = [];
  for (let slides = 1; slides < 10; slides++) {
    slider.push({ id: slides, name: slides });
  }
  return slider;
};

const Spinner = () => {
  return (
    <div>
      <h3>Loading.....</h3>
    </div>
  );
};

const ShowCaseSection = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    setstate(getData());
  }, []);
  return (
    <section id='show-case-section' className='show-case-section'>
      <div className='container show-case-wrapper'>
        <header className='section-header'>
          <h2>Show case</h2>
          <p>ALL ABOUT THE FUN OF THE GAME</p>
        </header>
        <div className='testimonials-slider swiper-container'>
          <LazyLoad placeholder={<Spinner />}>
            <div className='phone-frame'>
              <img src={'img/show-case/i-phone.png'} className='img-fluid' />
            </div>
            <Swiper
              speed={600}
              loop={true}
              slidesPerView={'auto'}
              autoplay={{ delay: 1000 }}
              pagination={false}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },

                1200: {
                  slidesPerView: 3,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}>
              {state.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className='swiper-slide'>
                    <div className='showcases-item'>
                      <div className='profile mt-auto'>
                        <img
                          src={`/img/show-case/s${data.name}.png`}
                          className='show-img-slides img-fluid'
                          alt=''
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </LazyLoad>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
