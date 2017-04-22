'use strict';
//constructor function to log image information

function Image(folder, name, filetype) {
  //this.shownPercent ??
  this.clickCount = 0;
  this.showCount = 0;
  this.fileName= folder+name+filetype;
}

// var previous = [];
// var secondToLast = [];
var current = [];
var totalClicks = 0;

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


var randomArray = [];
function randomArrayGenerator() {
  for (var i = images.length; i >0; i--) {
    var popped = images.splice(randomNum(), 1);
    randomArray.push(popped[0]);
  }
}



var current = [];
var previous = [];

function threeRandomPhotos() {
  randomArrayGenerator();
  var previous = current;

  // randomArray.push(current);
  // randomArray.push(previous);
  var nextimage = randomArray.pop();
  // console.log(randomArray.length);
  current.push(nextimage);


  nextimage = randomArray.pop();
  current.push(nextimage);
  // console.log(randomArray.length);

  nextimage = randomArray.pop();
  current.push(nextimage);
  // console.log(randomArray.length);
  randomArray= randomArray.concat(current);
  // console.log(randomArray);
  return current;
}

// parentNode.removeChild(image_x);

function imageClicker(event) {
  console.log(event.target);
  totalClicks++;
  var img = document.createElement('img');
  console.log(totalClicks);
  var currentIndex = img.getAttribute('Current-Image-Index');
  current[currentIndex].clickCount++;
  console.log(current[currentIndex].clickCount);
  createImages();
}


function createImages() {
  var current = threeRandomPhotos();
  var app = document.getElementById('app');
  var img = document.createElement('img');
  console.log(current);
  for (var i =0; i<3; i++) {
    img.setAttribute('class','images');
    console.log(img);
    img.setAttribute('src', current[i].fileName);
    img.setAttribute('Current-Image-Index', i);
    current[i].showCount++;
    console.log(current[i].showCount);
    console.log(current[i].clickCount);

    app.appendChild(img);
    console.log(img);
  }
}

// function showChart() {
  // SHOW YOURSELF
// }

// var canvas = document.getElementById('');

// var data = {
//   datasets: [{
//     data: [
//     // this will be click values!
//     ],
//     backgroundColor: [
//     // this will be different colors, matching up with the data property above
//     ],
//     label: 'clicks per item'
//   }],
//   labels: [
//   //image names...
//   ]
// };
//
// var barChart = new Chart(ctx, {
//   data: data,
//   type: "bar",
//   options: options,
//   });

createImages();
var img = document.getElementsByClassName('images');
console.log(img);
img.addEventListener('click', imageClicker);
