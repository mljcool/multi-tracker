import React from 'react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

const ShowCaseSection = () => {
  return (
    <section id='show-case-section' className='show-case-section'>
      <div className='container' data-aos='fade-up'>
        <header className='section-header'>
          <h2>Show case</h2>
          <p>ALL ABOUT THE FUN OF THE GAME</p>
        </header>

        <div className='testimonials-slider swiper-container'>
          <Swiper
            speed={600}
            loop={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              waitForTransition: true,
            }}
            pagination={{
              type: 'bullets',
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              1200: {
                slidesPerView: 5,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}>
            <SwiperSlide>
              <div className='swiper-slide'>
                <div className='testimonial-item'>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                  <div className='profile mt-auto'>
                    <img
                      src='/img/testimonials/testimonials-1.jpg'
                      className='testimonial-img'
                      alt=''
                    />
                    <h3>buckingham Real Estate</h3>
                    <h4>
                      <a href='#' className='read-more'>
                        <span>Read More</span>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide'>
                <div className='testimonial-item'>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                  <div className='profile mt-auto'>
                    <img
                      src='/img/testimonials/testimonials-1.jpg'
                      className='testimonial-img'
                      alt=''
                    />
                    <h3>Saul Goodman</h3>
                    <h4>
                      <a href='#' className='read-more'>
                        <span>Read More</span>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide'>
                <div className='testimonial-item'>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                  <div className='profile mt-auto'>
                    <img
                      src='/img/testimonials/testimonials-1.jpg'
                      className='testimonial-img'
                      alt=''
                    />
                    <h3>Create expectations</h3>
                    <h4>
                      <a href='#' className='read-more'>
                        <span>Read More</span>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide'>
                <div className='testimonial-item'>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                  <div className='profile mt-auto'>
                    <img
                      src='/img/testimonials/testimonials-1.jpg'
                      className='testimonial-img'
                      alt=''
                    />
                    <h3>Saul Goodman</h3>
                    <h4>
                      <a href='#' className='read-more'>
                        <span>Read More</span>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='swiper-slide'>
                <div className='testimonial-item'>
                  <p>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </p>
                  <div className='profile mt-auto'>
                    <img
                      src='/img/testimonials/testimonials-1.jpg'
                      className='testimonial-img'
                      alt=''
                    />
                    <h3>Saul Goodman</h3>
                    <h4>
                      <a href='#' className='read-more'>
                        <span>Read More</span>
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ShowCaseSection;
