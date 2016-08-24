'use strict';
//canvas settings
let canvasColor = [200,200,200],
    currentBarColor = [255,50,50],
    newCompareColor = [50,50,255];

let entityCount = 100,
    spacing = 2,
    slot = [],
    swapSlot,
    assignment = [];

function setup(){
    // Create the canvas
    createCanvas(windowWidth - 5, windowHeight - 30);
    // background(canvasColor);
    
    frameRate(120);

    //create positions
    var entityWidth = (width - ((entityCount * spacing)-spacing)) / entityCount;
    for (let i = 0; i < entityCount; i++){
        slot.push(new Slot(i,canvas.width / entityCount));
        assignment.push(i);
    }
    assignment = shuffle(assignment);
    swapSlot = new Slot(-1,0);

    //create bars
    for (let i=0; i < entityCount ; i++){
        var h = (i+1)*(height / entityCount);
        var x = slot[assignment[i]].xPos;
        var y = canvas.height - h;
        slot[assignment[i]].contents = new Bar(i,x,y,entityWidth,h);
        slot[assignment[i]].contents.display();
    }
}

var step = 0;
var colorHold;
var counter = 0;
function draw(){

    slot.forEach(function(i){
        
        var tempEntity = i.contents

        colorHold = tempEntity.color;
        tempEntity.color = currentBarColor;
        //tempEntity.display();
        //{TODO} cause some sort of delay
        tempEntity.color = colorHold;
        tempEntity.display();

    });
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function colorMap(e){
    return color(map(e,0,windowHeight,10,200),100,100);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}