import React from 'react';
import ContentInfo from './ContentInfo.js';

const primaryCategories = [
  "MISC",
  "2021",
  "2020",
  "2019",
  "2018",
];

let primaryNav;
let secondaryNav;

const NavManager = ({ showMobileNav, setShowMobileNav, secondaryNavVal, setSecondaryNavVal, primaryNavVal, setPrimaryNavVal, mobile }) => {

  function renderPrimaryNavItem(item) {
    if (item === "MISC") { return <></> }
    if (item === primaryNavVal) {
      return (
        <div className='nav-item'><b>{item}</b></div>
      );
    } else {
      return (
        <div className='nav-item' onClick={() => { setPrimaryNavVal(item) }}>{item}</div>
      );
    }
  }
  function renderSecondaryNavItem(item) {
    if (item === "MISC") { return <></> }
    if (!showMobileNav) {
      if (item === secondaryNavVal) {
        return (
          <div className='nav-item'><b>{item}</b></div>
        );
      } else {
        return (
          <div className='nav-item' onClick={() => { setSecondaryNavVal(item) }}>{item}</div>
        );
      }
    } else {
      if (item === secondaryNavVal) {
        return (
          <div onClick={() => { setShowMobileNav(false); }} className='nav-item'><b>{item}</b></div>
        );
      } else {
        return (
          <div className='nav-item' onClick={() => { setSecondaryNavVal(item); setShowMobileNav(false); }}>{item}</div>
        );
      }
    }
  }
  function renderSecondaryNavItems(navVal) {
    let titles = [];
    let objs = ContentInfo(navVal);
    objs.forEach(obj => {
      titles.push(obj.title);
    });
    let jsx = (
      <div className="secondary-nav">
        {titles.map(title => renderSecondaryNavItem(title))}
      </div>
    );
    return (
      jsx
    );
  }

  primaryNav = (
    <div className="primary-nav">
      {primaryNavVal === "" ? <></> : primaryCategories.map(category => renderPrimaryNavItem(category))}
    </div>
  );

  secondaryNav = (
    <>
      {renderSecondaryNavItems(primaryNavVal)}
    </>
  );

  if (!mobile) {
    return (
      <div className="navbar-holder">
        {primaryNav}
        {secondaryNav}
      </div>
    );
  } else {
    return (
      <div className="mobile-menu-linkholder">
        {primaryNav}
        {secondaryNav}
      </div>
    );
  }
}

export default NavManager;
