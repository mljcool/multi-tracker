import React, { useEffect } from 'react';

import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import '../styles/landing-page.scss';
import AOS from 'aos';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
