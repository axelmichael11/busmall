'use strict';
//constructor function to log image information

// var imageArray= ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];

// yeah i don't even need the constructor to generate pictures... something for resubmit!

var imageArray = [
  new Image('sldfkjdls'),

];


function Image(folder, name, filetype) {
  this.clickCount = 0;
  this.showCount = 0;
  this.fileName= folder+name+'/'+filetype;
  // this.appendImage = function() {
  //   imageArray.push(this.fileName);
  // };
  imageArray.push(this)
  //I am just appending the filename to a global array, to use elswhere...
  this.appendImage();

  this.randomArrayIndex= function() {
    return Math.floor(Math.random()*(imageArray.length));
  };
  //* Using Durstenfeld shuffle algorithm...
  this.noDuplicator = function() {
    var noDup = [
      this.randomArrayIndex(),
      this.randomArrayIndex(),
      this.randomArrayIndex(),
    ];

    for (var i=0; i <noDupArray.length; i++) {
      while (number1==noDupArray[i]) {
        var number1 = this.randomArrayIndex();
      }

    }
  };
}

Image.prototype.noDuplicator = function() {
  var noDup = [
    this.randomArrayIndex(),
    this.randomArrayIndex(),
    this.randomArrayIndex(),
  ];


  // this.randomImageRetriever = function() {
  //   return imageArray[this.randomArrayIndex()];
  // };
    // this.randomImageRetriever();
    // this.randomImageRetriever();

  // this.createImage= function() {
  //   var table = document.getElementById('app');
  //   var ul = document.createElement('ul');
  //   var tr = document.createElement('tr');
  //   ul.setAttribute('id','title');
  //   ul.appendChild(tr);
  //   var image1 = document.createElement('img');
  //   image1.textContent = imageArray[randomNumber()];
  //   var imageResult = image1.setAttribute('src',imageArray[randomNumber()]);
  //   image1.setAttribute('class','images');
  //   tr.appendChild(image1);
  //   ul.appendChild(tr);
  //   table.appendChild(ul);
  // };
  // this.noDuplicator = function() {
  //
  // };

// ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];
var banana = new Image('img/','banana', '.jpg');
var bathroom = new Image('img/','bag','.jpg');
var breakfast = new Image('img/','breakfast','.jpg');
var wine = new Image('img/','wine-glass','.jpg');


// I wanted to create this method to use the constructor... instead of having to type out the images... something for resubmit...
// Image.prototype.appendImage = function() {
//   for (var i=0; i <this.imageArray.length; i++) {
//     this.imageArray.push(this.fileName);
//   }
//   return this.imageArray;
// };

function randomNumber() {
  return Math.floor(Math.random()*(imageArray.length)-1);
}

//duncan used splicce/concat... pretty cool!

function createImage() {

  var table = document.getElementById('app');
  var ul = document.createElement('ul');
  var tr = document.createElement('tr');
  ul.setAttribute('id','title');
  ul.appendChild(tr);
  var image1 = document.createElement('img');
  image1.textContent = imageArray[randomNumber()];
  var image = image1.setAttribute('src',imageArray[randomNumber()]);
  image1.setAttribute('class','images');
  tr.appendChild(image1);
  ul.appendChild(tr);
  table.appendChild(ul);
}


function noDuplicate() {
  var chosenArray = [];
  var image1 =createImage(imageArray[randomNumber()]);
  var image2 = createImage(imageArray[randomNumber()]);
  var image3 = createImage(imageArray[randomNumber()]);
  chosenArray.push(image1);
  chosenArray.push(image2);
  chosenArray.push(image3);

  if(image1==image2 || image1==image3 || image2==image3) {

  }
}

// createImage(imageArray[randomNumber()]);
// createImage(imageArray[randomNumber()]);
// createImage(imageArray[randomNumber()]);
