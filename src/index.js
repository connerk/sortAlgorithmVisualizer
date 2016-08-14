let spacing = 2;

let entityCount = 20,
    entityWidth = 0,
    entities = [];


function setup(){
    // Create the canvas
    createCanvas(windowWidth - 5, windowHeight - 5);
    background(150);
    entityWidth = (windowWidth -((entityCount*spacing)-spacing))/entityCount;
    fillEntities();
    for (var i = 0; i < entityCount; i++){
        noStroke();
        var e = entities[i];
        var c = colorMap(e);
        fill(c);
        rect((i*spacing) + (e.width * i), canvas.height - e.height, e.width, e.height);
    }
}

function draw(){
    //console.log("draw complete")
}

function bar(id,h=0,w=0){
    var a = {
    id: "bar-"+id,
    height: h,
    width: w
    }
    return a;
}

function fillEntities(){
    for (var i = 0; i < entityCount; i++){
        var a = {};
        a = bar(i,random()*windowHeight,entityWidth);
        entities.push(a);
    }
}

function colorMap(e){
    return color(map(e.height,0,windowHeight,10,200),100,100);
}