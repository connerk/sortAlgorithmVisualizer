//canvas settings
let canvasColor = [200,200,200],
    currentBarColor = [255,50,50],
    newCompareColor = [50,50,255];

let position = [],
    positionCount = 100,
    positionWidth = 0,
    spacing = 2,
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