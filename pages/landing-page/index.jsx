import HeaderNav from '@components/landing-page/HeaderNav';
import React, { Fragment } from 'react';
import ContactUsSection from './ContactUsSection';
import HeroSection from './HeroSection';
import ShowCaseSection from './ShowCaseSection';
import BenefitsSection from './BenefitsSection';
import BunosFeatureSection from './BunosFeatureSection';
import KeyFeature from './KeyFeature';

function index() {
  return (
    <Fragment>
      <HeaderNav />
      <HeroSection />
      <BenefitsSection />
      <KeyFeature />
      <BunosFeatureSection />
      <ShowCaseSection />
      <ContactUsSection />
    </Fragment>
  );
}

export default index;
