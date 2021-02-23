class SubCategory {
  constructor(parent, title, images) {
    this.parent = parent;
    this.title = title;
    this.images = images;
  }
}

let ObjectsForMISC = [];
let ObjectsFor2021 = [];
let ObjectsFor2020 = [];
let ObjectsFor2019 = [];
let ObjectsFor2018 = [];

//MISC Photos ------------------------------------------------------

ObjectsForMISC.push(
  new SubCategory('MISC', 'MISC', [
    'MISC1.jpg',
    'MISC2.jpg',
    'MISC3.jpg',
    'MISC4.jpg',
    'MISC5.jpg',
    'MISC6.jpg',
    'MISC7.jpg',
    'MISC8.jpg',
  ])
);

//2021 Photos ------------------------------------------------------

ObjectsFor2021.push(
  new SubCategory('2021', 'Ellie', [
    'imgUrl.png',
  ])
);

ObjectsFor2021.push(
  new SubCategory('2021', 'Will', [
    'imgUrl.png',
  ])
);

ObjectsFor2021.push(
  new SubCategory('2021', 'Summer', [
    'imgUrl.png',
  ])
);

//2020 Photos ------------------------------------------------------

ObjectsFor2020.push(
  new SubCategory('2020', 'Kunle', [
    'KUNLE1.jpg',
    'KUNLE2.jpg',
    'KUNLE3.jpg',
    'KUNLE4.jpg',
    'KUNLE5.jpg',
    'KUNLE6.jpg',
    'KUNLE7.jpg',
    'KUNLE8.jpg',
    'KUNLE9.jpg',
  ])
);
ObjectsFor2020.push(
  new SubCategory('2020', 'Presley', [
    'PRESLEY1.jpg',
    'PRESLEY2.jpg',
    'PRESLEY3.jpg',
    'PRESLEY4.jpg',
  ])
);
ObjectsFor2020.push(
  new SubCategory('2020', 'Sofia Rose', [
    'imgUrl.png',
  ])
);
ObjectsFor2020.push(
  new SubCategory('2020', 'Casey', [
    'CASEY1.jpg',
    'CASEY2.jpg',
    'CASEY3.jpg',
    'CASEY4.jpg',
    'CASEY5.jpg',
    'CASEY6.jpg',
  ])
);
ObjectsFor2020.push(
  new SubCategory('2020', 'Reece', [
    'REECE1.jpg',
    'REECE2.jpg',
    'REECE3.jpg',
    'REECE4.jpg',
    'REECE5.jpg',
    'REECE6.jpg',
  ])
);
ObjectsFor2020.push(
  new SubCategory('2020', 'Sue Ah', [
    'SUEAH1.jpg',
    'SUEAH2.jpg',
    'SUEAH3.jpg',
    'SUEAH4.jpg',
    'SUEAH5.jpg',
  ])
);

//2019 Photos ------------------------------------------------------

ObjectsFor2019.push(
  new SubCategory('2019', 'Curtis', [
    'imgUrl.png',
  ])
);


ObjectsFor2019.push(
  new SubCategory('2019', 'Emmie + Sydney', [
    'imgUrl.png',
  ])
);

ObjectsFor2019.push(
  new SubCategory('2019', 'String', [
    'EMMIESTRING1.jpg',
    'EMMIESTRING2.jpg',
    'EMMIESTRING3.jpg',
    'EMMIESTRING4.jpg',
    'EMMIESTRING5.jpg',
    'EMMIESTRING6.jpg',
  ])
);

ObjectsFor2019.push(
  new SubCategory('2019', 'Jordan', [
    'JORDAN1.jpg',
    'JORDAN2.jpg',
    'JORDAN3.jpg',
  ])
);

ObjectsFor2019.push(
  new SubCategory('2019', 'Tanisha + Shanice', [
    'TANISHA1.jpg',
    'TANISHA2.jpg',
    'TANISHA3.jpg',
    'TANISHA4.jpg',
    'TANISHA5.jpg',
  ])
);

//2018 Photos ------------------------------------------------------

ObjectsFor2018.push(
  new SubCategory('2018', 'Otish', [
    'imgUrl.png',
  ])
);

ObjectsFor2018.push(
  new SubCategory('2018', 'Red Ghost', [
    'REDGHOST1.jpg',
    'REDGHOST2.jpg',
    'REDGHOST3.jpg',
    'REDGHOST4.jpg',
  ])
);

ObjectsFor2018.push(
  new SubCategory('2018', 'Self Portraits', [
    'imgUrl.png',
  ])
);

ObjectsFor2018.push(
  new SubCategory('2018', 'Sola', [
    'imgUrl.png',
  ])
);

const ContentInfo = (category) => {

  if (category === '2018') { return ObjectsFor2018; }
  if (category === '2019') { return ObjectsFor2019; }
  if (category === '2020') { return ObjectsFor2020; }
  if (category === '2021') { return ObjectsFor2021; }
  if (category === 'MISC') { return ObjectsForMISC; }


}

export default ContentInfo;
