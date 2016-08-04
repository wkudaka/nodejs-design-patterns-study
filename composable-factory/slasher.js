const stampit = require('stampit');
const slasher = stampit().methods({
  slash(direction){
    console.log(`${this.name} slashed to the ${direction}`);
  }
});

module.exports = slasher;
