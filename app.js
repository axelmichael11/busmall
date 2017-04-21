'use strict';
//constructor function to log image information

// var imageArray= ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];

// yeah i don't even need the constructor to generate pictures... something for resubmit!

//**************
// var imageArray = [
//   new Image('img/','bag',''),
//   new Image('img/','banana','.jpg'),
//   new Image('img/','bathroom','.jpg'),
//   new Image('img/','boots','.jpg'),
//   new Image('img/','breakfast','.jpg'),
//   new Image('img/','bubblegum','.jpg'),
//   new Image('img/','chair','.jpg'),
//   new Image('img/','cthulhu','.jpg'),
//   new Image('img/','dog-duck','.jpg'),
//   new Image('img/','dragon','.jpg'),
//   new Image('img/','pen','.jpg'),
//   new Image('img/','pet-sweep','.jpg'),
//   new Image('img/','scissors','.jpg'),
//   new Image('img/','shark','.jpg'),
//   new Image('img/','sweep','.png'),
//   new Image('img/','tauntaun','.jpg'),
//   new Image('img/','unicorn','.jpg'),
//   new Image('img/','usb','.gif'),
//   new Image('img/','water-can','.jpg'),
//   new Image('img/','wine-glass','.jpg'),
// ];

function Image(folder, name, filetype) {
  //this.shownPercent ??
  this.clickCount = 0;
  this.showCount = 0;
  this.fileName= folder+name+filetype;
}


//**************
var images = [
  new Image('img/','bag','.jpg'),
  new Image('img/','banana','.jpg'),
  new Image('img/','bathroom','.jpg'),
  new Image('img/','boots','.jpg'),
  new Image('img/','breakfast','.jpg'),
  new Image('img/','bubblegum','.jpg'),
  new Image('img/','chair','.jpg'),
  new Image('img/','cthulhu','.jpg'),
  new Image('img/','dog-duck','.jpg'),
  new Image('img/','dragon','.jpg'),
  new Image('img/','pen','.jpg'),
  new Image('img/','pet-sweep','.jpg'),
  new Image('img/','scissors','.jpg'),
  new Image('img/','shark','.jpg'),
  new Image('img/','sweep','.png'),
  new Image('img/','tauntaun','.jpg'),
  new Image('img/','unicorn','.jpg'),
  new Image('img/','usb','.gif'),
  new Image('img/','water-can','.jpg'),
  new Image('img/','wine-glass','.jpg'),
];
  // this.appendImage = function() {
  //   imageArray.push(this.fileName);
  // };

function randomNum() {
  return Math.floor(Math.random()*(images.length));
}
  //* Using Durstenfeld shuffle algorithm...
function randomIndex() {
  return Math.floor(Math.random()*(randomArray.length-3)+3);
}

var randomArray = [];
function randomArrayGenerator() {
  for (var i = images.length; i >0; i--) {
    var popped = images.splice(randomNum(), 1);
    randomArray.push(popped[0]);
  }
}


var previous = [];
var secondToLast = [];

function threeRandomPhotos() {
  randomArrayGenerator();
  secondToLast = previous;
  previous = current;
  var current = [];

  // randomArray.push(current);
  // randomArray.push(previous);
  var nextimage = randomArray.pop();
  console.log(randomArray.length);
  current.push(nextimage);


  nextimage = randomArray.pop();
  current.push(nextimage);
  console.log(randomArray.length);

  nextimage = randomArray.pop();
  current.push(nextimage);
  console.log(randomArray.length);
  randomArray= randomArray.concat(current);
  console.log(randomArray);
  return current;
}
























function createImages() {
  var current = threeRandomPhotos();
  var app = document.getElementById('app');

  for (var i =0; i<current.length; i++) {
    var div = document.createElement('div');
    var img = document.createElement('img');
    div.setAttribute('class','images');
    img.setAttribute('src', current[i].fileName);
    img.setAttribute('class','images');
    div.appendChild(img);
    app.appendChild(div);
  }
}

createImages();

// function handleClickCounter(event) {
//
// }


// // createImage(imageArray[randomNumber()]);
// // createImage(imageArray[randomNumber()]);
// // createImage(imageArray[randomNumber()]);
