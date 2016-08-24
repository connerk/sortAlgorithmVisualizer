'use strict';
function Bar(id,x=0,y=0,w=0,h=0){
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