const stampit = require('stampit');

const mover = stampit().methods({
  move(xIncr, yIncr){
    this.x += xIncr;
    this.y += yIncr;
    console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
  }
});


module.exports = mover;
