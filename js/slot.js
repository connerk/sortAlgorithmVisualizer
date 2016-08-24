'use strict';
function Slot(index=0,width=0){
    this.index = index;
    this.width = width;
    this.xPos = this.width * this.index;
   
    this.contents = undefined;

    this.empty = (this.contents===undefined)

}