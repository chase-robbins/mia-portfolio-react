import React from 'react';
import NavManager from './NavManager.js';


const MobileNav = ({primaryNavVal, setPrimaryNavVal, secondaryNavVal, setSecondaryNavVal, setMobileScreen, showMobileNav, setShowMobileNav}) => {
  return(
    <div className="menu-parent">
      <div className="mobile-menu-linkholder">
        <NavManager
          setShowMobileNav={setShowMobileNav}
          showMobileNav={showMobileNav}
          mobile={true}
          secondaryNavVal={secondaryNavVal}
          setSecondaryNavVal={setSecondaryNavVal}
          primaryNavVal={primaryNavVal}
          setPrimaryNavVal={setPrimaryNavVal}
        />
      </div>
    </div>
  );
}

export default MobileNav;
