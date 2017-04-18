'use strict';
//constructor function to log image information

var imageArray = [];


function Image(fileName) {
  this.fileName = fileName;
  this.clickCount = [];
  this.showCount = [];
  this.imageArray= ['img/bag.jpg','img/banana.jpg','img/bathroom.jpg','img/boots.jpg','img/breakfast.jpg','img/bubblegum.jpg','img/bubblegum.jpg','img/chair.jpg','img/cthulhu.jpg','img/dog-duck.jpg','img/dragon.jpg','img/pen.jpg','img/pet-sweep.jpg','img/scissors.jpg','img/shark.jpg','img/sweep.png','img/tauntaun.jpg','img/unicorn.jpg','img/usb.gif','img/water-can.jpg','img/wine-glass.jpg'];
}

Image.prototype.appendImage = function() {
  for (var i=0; i <this.imageArray.length; i++) {
    return 'img/'+this.imageArray[i];
  }
  console.log(Image.appendImage());
};

Image.prototype.randomNumber = function(){
  return Math.floor(Math.random()*(this.imageArray.length)-1);
};

Image.prototype.createRandomImage = function() {
  var table = document.getElementById('app');
  var ul = document.createElement('ul');
  var tr = document.createElement('tr');
  ul.setAttribute('id','title');
  ul.textContent = this.fileName;
  ul.appendChild(tr);
  var image1 = document.createElement('img');
  var image2 = document.createElement('img');
  var image3 = document.createElement('img');
  image1.textContent = imageArray[this.randomNumber()];
  image2.textContent = imageArray[this.randomNumber()];
  image3.textContent = imageArray[this.randomNumber()];
  image1.setAttribute('src',image1.textContent);
  image2.setAttribute('src',image1.textContent);
  image3.setAttribute('src',image1.textContent);
  tr.appendChild(image1);
  ul.appendChild(tr);
  table.appendChild(ul);
};

// Image.prototype.createRandomImage = function() {
//
// };

//
//   if (image1.textContent==image2.textContent)
//
//    || image1.textContent==image3.textContent || image2.textContent==image3.textContent)
//
//
//
// };


var banana = new Image('banana.png');
var bag= new Image('bag.jpg');
console.log(banana.appendImage());
console.log(bag.appendImage());
console.log(banana.createRandomImage());
console.log(banana.createRandomImage());

console.log(banana.imageArray);

/*
fileName,
filepath,
number of times it has been shown,
number of times it has been clicked..
PERHAPS a property that contains a text string you can use as an ID in HTML... (maybe just use fileName from above?)

log clicker...
  logs the amount of clicks.



Create a random image generator...
(Should I put this inside the above constructor or create a seperate method outside...?) (check both ways) (note that the function has to be called in order to use outside as its own method!...)
*/
