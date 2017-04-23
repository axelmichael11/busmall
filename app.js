'use strict';
//constructor function to log image information


function Image(folder, name, filetype) {
  //this.shownPercent ??
  this.clickCount = 0;
  this.showCount = 0;
  //I am trying to give this a percent clicked... bleh
  // this.percentClicked = function() {
  //   return parseInt(this.clickCount)/parseInt(this.showCount);
  // };
  // this.percent = this.percentClicked();
  // this.recommended = if (this.clickCount/this.showCount>)
  this.fileName = folder+name+filetype;
  this.name = name;
  this.src =  folder+name+filetype;
}
var names =[];
var clickCount = [];
var showCount = [];

var previous = [];
var current = [];
var totalClicks = 0;

//trial and error with this local storage thing...


// local storage object...!
var dataStorage= {
  title: 'Data on Images',
  dataForLocal: [],
};

try {
  dataStorage = JSON.parse(localStorage.dataStorage);
} catch (error) {
  console.log('error while trying to retrieve data...');
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


function randomNum() {
  return Math.floor(Math.random()*(images.length));
}
  //* Using Durstenfeld shuffle algorithm...


var randomArray = [];

//Something funky is going on... I am trying to concat images to contain it's original 20 images... pay attention to how data is being thrown in...
function randomArrayGenerator() {
  for (var i = 3 ; i >0; i--) {
    var popped = images.splice(randomNum(), 1);
    randomArray.push(popped[0]);
    //experimental concat to get 20 images back
    images = images.concat(popped[0]);
  }
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
  // console.log('event.target'+event.target);
  totalClicks++;
  console.log(totalClicks);
  var currentIndex = event.target.getAttribute('Current-Image-Index');
  current[currentIndex].clickCount++;
  // console.log(current[currentIndex]);
  var app = document.getElementById('app');
  console.log(current[currentIndex]);

  dataStorage.dataForLocal.push(current[currentIndex]);
  try {
    localStorage.dataStorage = JSON.stringify(dataStorage);
  } catch (error) {
    console.log('something went wrong', error);
  }

  if (totalClicks===25) {
    app.textContent = '';
    showChart();
    createDataHeader();
    createLocalData();
  } else {
    createImages();
  }
}

function showChart() {
  var app = document.getElementById('app');
  var canvas = document.createElement('canvas');
  app.appendChild(canvas);
  //filled my example rectangle!

  var ctx = canvas.getContext('2d');
  ctx.width = '160';
  ctx.height = '100';
  ctx.fillRect(0,0,50,50);
  //for loop to create arrays for data. I need the image name for labels, click counts, and shown counts...
  for (var i=0 ; i <images.length; i++) {
    // imagesForData = images[i];
    showCount.push(images[i].showCount);
    names.push(images[i].name);
    clickCount.push(images[i].clickCount);
  }
  var data = {
    labels: names,
    datasets: [
      {
        // this will be click values!
        data: clickCount,
        label: 'Image Click Count',
        backgroundColor: 'rgba(31, 176, 209, 1)',
      },
      {
        data: showCount,
        label: 'Image Show Count',
        backgroundColor: 'rgba(28, 98, 15, 1)',
      },
    ],
  };
  new Chart(ctx, {
    type: 'bar',
    data: data,
    borderColor: 'rgba(75,192,192,0.4)',
    options:{
      responsive: true,
      maintainAspectRatio: true
    }
  });
}





console.log(showCount);
console.log(names);
console.log(clickCount);

//*****************//*****************//*****************
function createDataHeader(){
  var table = document.getElementById('localapp');
  var tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  var dataImage;
  //creating titles...
  var tableRow = document.createElement('tr');
  tableRow.setAttribute('id','data-titles');
  var hitem = document.createElement('th');
  hitem.textContent= 'Item';
  tableRow.appendChild(hitem);
  var hviews = document.createElement('th');
  hviews.textContent= 'Views';
  tableRow.appendChild(hviews);
  var hclicks = document.createElement('th');
  hclicks.textContent= 'Clicks';
  tableRow.appendChild(hclicks);
  var percent = document.createElement('th');
  percent.textContent= '% of Clicks When Viewed';
  tableRow.appendChild(percent);
  var rec = document.createElement('th');
  rec.textContent= 'Recommended?';
  tableRow.appendChild(rec);
  table.appendChild(tableRow);
}

function createLocalData() {
  var table = document.getElementById('localapp');
  // var percenter = function() {
  //
  // }
  for (var i = 0; i <dataStorage.dataForLocal.length; i++) {
    var tr = document.createElement('tr');

    var item = document.createElement('td');
    item.textContent = dataStorage.dataForLocal[i].name;

    var views = document.createElement('td');
    views.textContent = dataStorage.dataForLocal[i].showCount;

    var clicks = document.createElement('td');
    clicks.textContent = dataStorage.dataForLocal[i].clickCount;

    var percent = document.createElement('td');
    percent.textContent =dataStorage.dataForLocal[i].clickCount/dataStorage.dataForLocal[i].showCount;
    var rec = document.createElement('td');
    if (percent.textContent<(1/5)) {
      rec.textContent = 'NO';
    } else {
      rec.textContent = 'YES';
    }
    tr.appendChild(item);
    tr.appendChild(views);
    tr.appendChild(clicks);
    tr.appendChild(percent);
    tr.appendChild(rec);
    table.appendChild(tr);

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

createImages();
var imgArray = document.getElementsByClassName('images');
for(var i=0; i < imgArray.length; i++){
  // console.log(imgArray);
  imgArray[i].addEventListener('click', imageClicker);
}
