const stampit = require('stampit');

const shooter = stampit().props({
  bullets:6
}).methods({
  shoot(direction) {
    if(this.bullets > 0) {
      --this.bullets;
      console.log(`${this.name} shoot to the ${direction}`);
    }
  }
});

module.exports = shooter;
