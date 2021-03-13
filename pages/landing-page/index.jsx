import HeaderNav from '@components/landing-page/HeaderNav';
import React from 'react';
import HeroSection from './HeroSection';
import ShocaseSection from './ShocaseSection';

function index() {
  return (
    <div>
      <HeaderNav></HeaderNav>
      <HeroSection />
      <ShocaseSection />
    </div>
  );
}

export default index;
