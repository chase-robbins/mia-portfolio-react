import React, { useState } from 'react';
import './css/normalize.css';
import './css/webflow.css';
import './css/mia.css';
import NavManager from './components/NavManager.js';
import Gallery from './components/Gallery.js';
import MobileNav from './components/MobileNav.js';
import MobileMenuButton from './components/MobileMenuButton.js';

function App() {
  const [primaryNavVal, setPrimaryNavVal] = useState('MISC');
  const [secondaryNavVal, setSecondaryNavVal] = useState('MISC');
  const [mobileScreen, setMobileScreen] = useState();
  const [showMobileNav, setShowMobileNav] = useState();

  if (showMobileNav) {
    return (
      <MobileNav showMobileNav={showMobileNav} setShowMobileNav={setShowMobileNav} setMobileScreen={setMobileScreen} primaryNavVal={primaryNavVal} setPrimaryNavVal={setPrimaryNavVal} secondaryNavVal={secondaryNavVal} setSecondaryNavVal={setSecondaryNavVal} />
    );
  }
  if (!mobileScreen) {
    return (
      <div className="App body">
        <NavManager secondaryNavVal={secondaryNavVal} setSecondaryNavVal={setSecondaryNavVal} primaryNavVal={primaryNavVal} setPrimaryNavVal={setPrimaryNavVal} />
        <div className="content-holder">
          <Gallery secondaryNavVal={secondaryNavVal} primaryNavVal={primaryNavVal} />
        </div>
        <div className="bio-holder">
          <div className="bio-block"><img src="/images/Mia-McCarthy.png" loading="eager" sizes="(max-width: 479px) 90vw, (max-width: 991px) 45vw, 35vw" srcSet="/images/Mia-McCarthy-p-500.png 500w, /images/Mia-McCarthy.png 679w" alt="" className="image" /></div>
          <p className="contact-pg bdy">Howdy, I'm a cross-disciplinary designer currently studying at <a href="https://iovine-young.usc.edu/">USC's Iovine & Young Academy</a>. I'm also a photographer for <a href="https://www.imgmodels.com/new-york/home">IMG Models Worldwide</a>. In my free time, I'm also a 3d designer, painter, rug tufter, and product photographer. Enjoy!</p>
          <div className="contact-info">
            <p className="contact-pg">miamccarthy@gmail.com<br />tel. +1 760 331 7458<br /></p>
            <div className="social-icons">
              <a href="https://instagram.com/miajajah" className="social-icon-link w-inline-block"><img src="/images/noun_instagram_2399683.png" loading="lazy" alt="" /></a>
              <a href="https://linkedin.com" className="social-icon-link w-inline-block"><img src="/images/noun_linkedin_2399666.png" loading="lazy" alt="" /></a>
              <a href="https://google.com" className="social-icon-link w-inline-block"><img src="/images/resume.png" loading="lazy" alt="" /></a>
            </div>
          </div>
        </div>
        <MobileMenuButton setShowMobileNav={setShowMobileNav} setMobileScreen={setMobileScreen} />
        <div className="floating-/images-holder"></div>
      </div>
    );
  } else {
    if (secondaryNavVal !== '') {
      return (
        <>
          <img onClick={() => { setMobileScreen(false) }} src="/images/Mia-McCarthy.png" loading="eager" sizes="(max-width: 479px) 90vw, (max-width: 991px) 45vw, 35vw" srcSet="/images/Mia-McCarthy-p-500.png 500w, /images/Mia-McCarthy.png 679w" alt="" className="image logo" />
          <Gallery secondaryNavVal={secondaryNavVal} primaryNavVal={primaryNavVal} />
          <MobileMenuButton setShowMobileNav={setShowMobileNav} setMobileScreen={setMobileScreen} />
        </>
      );
    }
  }
}

export default App;
