class SubCategory {
  constructor(parent, title, images){
    this.parent = parent;
    this.title = title;
    this.images = images;
  }
}

//Photography
let photogObjects = [];

let emmieImages = [
  'e1.jpg',
  'e2.jpg'
];
let Emmie = new SubCategory('Photography', 'Emmie', emmieImages);
photogObjects.push(Emmie);

let kunleImages = [
  'k1.jpg',
  'k2.jpg'
];
let Kunle = new SubCategory('Photography', 'Kunle', kunleImages);
photogObjects.push(Kunle);


//3D Modeling

// UI UX

//Painting

const ContentInfo = (category) => {

  if(category === 'Photography'){return photogObjects;}
  // if(category === '3D Modeling'){return for3d;}
  // if(category === 'UI/UX Design'){return forUI;}
  // if(category === 'Painting'){return forPainting;}

}

export default ContentInfo;
