const stampit = require('stampit');

const character = stampit().props({
  name:'anonymous',
  lifePoints: 100,
  x:0,
  y:0
});

module.exports = character;
