Methodology...
After reading through twice, this seems to combine elements from the table and form labs from last week.. I will create a constructor that can be applied to all of the images in my img folder,

THEN I will need to create a random picture generator, perhaps the code will be similar to the "random cookie generator" but I will look into how the random effect has to append pictures randomly...

Perhaps use this random effect to then loop through the information and display the images, through an "imageGenerator" function...

Technical Plan.

html scaffold...
I would just make a basic website, but then just put the id="app" on a div that signals where my app will be created../

Create a constructor function that...
creates an object associated with each image,
with properties...
name,
filepath,
number of times it has been shown,
number of times it has been clicked..
PERHAPS a property that contains a text string you can use as an ID in HTML... (maybe just use name from above?)

log clicker...
  logs the amount of clicks.



Create a random image generator...
(Should I put this inside the above constructor or create a seperate method outside...?) (check both ways) (note that the function has to be called in order to use outside as its own method!...)

perhaps a random button generator...
  logs the clicks,


  So the end product of this method will...
  generate three unique images...
  count

create an appending function....
for loop that goes through the array of images...
yikes! These pictures will create buttons!


Tuesday's Chart Plan..
Today's lab seemed pretty self explanatory... I would need to RTFM, or read the manual at www.chartjs.org to really get the gist of the kind of graph I need to display...
i believe put this in a link tab at the top of my page
https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.js

NOTE: there is also an installation guide at the top as well in prompt? I am not sure if I will need to do this but I will definitely look towards this when routing data.

installation...

npm

npm install chart.js --save


Reading the manual, I will need to display the labels, colors, and data as property/values as part of the variable data...

structure like this...

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
  type: "bar",
  options: options,
  });

once the chart is set up, I will put this into an element on my index page!

var ctx = document.getElementById("myChart").getContext("2d");


this structure is really good to know, as I will simply push my click data to the data array property. This helps me organize my output for when I get to my even click handler...
