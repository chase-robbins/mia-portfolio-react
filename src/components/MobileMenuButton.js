import React from 'react';


const MobileMenuButton = ({setMobileScreen, setShowMobileNav}) => {

  return(
    <div
      onClick={()=>{
        setMobileScreen(true);
        setShowMobileNav(true);
      }}
      className="mobile-toolbar"
    >
      <div className="mobile-menu-trigger">Menu</div>
    </div>
  );
}

export default MobileMenuButton;
