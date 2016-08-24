//canvas settings
let canvasColor = [200,200,200],
    currentBarColor = [255,50,50],
    newCompareColor = [50,50,255];

let entityCount = 100,
    entityWidth = 0,
    spacing = 2,
    position = [],
    entities = [];

function setup(){
    // Create the canvas
    createCanvas(windowWidth - 5, windowHeight - 30);
    // background(canvasColor);
    
    frameRate(120);

    //create positions
    entityWidth = (width -((entityCount*spacing)-spacing))/entityCount;
    for (let i =0;i<entityCount;i++){
        position.push(i*(spacing+entityWidth));
    }
    var assignments = shuffle(position);

    //create bars
    for (let i=0; i<entityCount; i++){
        var h = (i+1)*(height/entityCount);
        var x = assignments[i];
        var y = canvas.height-h;
        entities.push(new bar(i,x,y,entityWidth,h));
        entities[i].display();
    }
}

var on = true;
var step = 0;
var colorHold,
    tempEntity;
function draw(){

    entities.forEach(i => (i.x == position[step]) ? tempEntity = i : "")

    if(on){
        colorHold = tempEntity.color;
        tempEntity.color = currentBarColor;
        tempEntity.display();
        on = !on;
        
    } else {
        tempEntity.color = colorHold;
        tempEntity.display();
        step++;
        on = !on;
    }

    (step == entities.length) ? step = 0 : ""
    
}

function bar(id,x=0,y=0,w=0,h=0){
    this.type = "bar";
    this.id = id;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.color = colorMap(this.h);

    this.display = function(){
        noStroke();
        fill(this.color)
        rect(this.x,this.y,this.w,this.h);
    }

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
