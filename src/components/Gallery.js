import React from 'react';
import ContentInfo from './ContentInfo.js';


const Gallery = ({ secondaryNavVal, primaryNavVal }) => {
  let links = [];
  let objs = ContentInfo(primaryNavVal);
  let found = false;
  objs.forEach(obj => {
    if (obj.title === secondaryNavVal && !found) {
      found = true;
      links = obj.images;
    }
  });
  function renderItem(link) {
    let x = "images/" + link;
    return <img src={x} alt="Photoshoot" loading='lazy' className='portfolioimage' />;
  }
  let jsx = (
    <div className='gallery-block'>
      {links.map(link => renderItem(link))}
    </div>
  );
  return jsx;
}

export default Gallery;
