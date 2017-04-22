'use strict';
//constructor function to log image information


function Image(folder, name, filetype) {
  //this.shownPercent ??
  this.clickCount = 0;
  this.showCount = 0;
  this.fileName= folder+name+filetype;
}


var previous = [];
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


function randomNum() {
  return Math.floor(Math.random()*(images.length));
}
  //* Using Durstenfeld shuffle algorithm...


var randomArray = [];
function randomArrayGenerator() {
  for (var i = 3 ; i >0; i--) {
    var popped = images.splice(randomNum(), 1);
    randomArray.push(popped[0]);
  }
  console.log(randomArray);
}

function threeRandomPhotos() {
  randomArrayGenerator();
  previous = current;
  current = [];
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
  images = images.concat(previous);
  // console.log('images',images.length,"previous",previous);
  // console.log(randomArray);
  return current;
}

// parentNode.removeChild(image_x);

function imageClicker(event) {
  console.log('event.target'+event.target);
  totalClicks++;
  console.log(totalClicks);
  var currentIndex = event.target.getAttribute('Current-Image-Index');
  current[currentIndex].clickCount++;
  console.log(current[currentIndex]);
  var app = document.getElementById('app');
  if (totalClicks===25) {
    app.textContent = '';
    showChart();
  } else {
    createImages();
  }
}



var app= document.getElementById('app');

function createImages() {
  var current = threeRandomPhotos();
  // console.log('current',current);
  // app.textContent= '';
  for (var i =0; i<3; i++) {
    var imgArray = document.getElementsByClassName('images');
    // var img = document.createElement('img');
    imgArray[i].setAttribute('class','images');
    imgArray[i].src = current[i].fileName;
    imgArray[i].setAttribute('Current-Image-Index', i);
    current[i].showCount++;
    // console.log(current[i].showCount);
    // console.log(current[i].clickCount);
    // console.log('showcount'+current[i].showCount);
    // console.log('clickcount'+current[i].clickCount);

    // app.appendChild(img);
  }
}

function showChart() {

}

// var canvas = document.getElementById('');

// var data = {
//   datasets: [{
//     data: [
//     // this will be click values!
//     ],
//     backgroundColor: [
   // this will be different colors, matching up with the data property above
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


var imgArray = document.getElementsByClassName('images');
for(var i=0; i < imgArray.length; i++){
  // console.log(imgArray);
  imgArray[i].addEventListener('click', imageClicker);
}
  //if(image1==image2 || image1==image3 || image2==image3) {

  //}
}


// Tuesday's lab...

var ctx = document.getElementById('barchart').getContext('2d');

var data = {
  datasets: [{
    data: [
    // this will be click values!
    ],
    backgroundColor: [
    // this will be different colors, matching up with the data property above
    ],
    label: 'clicks per item'
  }],
  labels: [
  //image names...
  ]
};

var barChart = new Chart(ctx, {
  data: data,
  type: 'bar',
  // options: I will refer to manual considering options...
});
