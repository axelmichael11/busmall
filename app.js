'use strict';
//constructor function to log image information

var imageArray= ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];

// yeah i don't even need the constructor to generate pictures... something for resubmit!
function Image(fileName) {
  this.fileName = fileName;
  this.clickCount = [];
  this.showCount = [];
  this.imageArray= [];
}

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

function createImage() {
  var table = document.getElementById('app');
  var ul = document.createElement('ul');
  var tr = document.createElement('tr');
  ul.setAttribute('id','title');
  ul.appendChild(tr);
  var image1 = document.createElement('img');
  image1.textContent = imageArray[randomNumber()];
  image1.setAttribute('src',imageArray[randomNumber()]);
  image1.setAttribute('id','images');
  tr.appendChild(image1);
  ul.appendChild(tr);
  table.appendChild(ul);
}

createImage(imageArray[randomNumber()]);
createImage(imageArray[randomNumber()]);
createImage(imageArray[randomNumber()]);
