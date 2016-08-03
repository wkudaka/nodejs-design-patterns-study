'use strict';

const OfflineState = require('./offline_state');
const OnlineState = require('./online_state');

class FailsafeSocket{
  constructor(options){
    this.options = options;
    this.queue = [];
    this.currentState = null;
    this.socket = null;
    this.states = {
      offline: new OfflineState(this),
      online: new OnlineState(this)
    };
    this.changeState('offline');
  }

  changeState(state){
    console.log('Activating state: '+ state);

    this.currentState = this.states[state];
    this.currentState.activate();
  }

  send(data){
    this.currentState.send(data);
  }
}

module.exports = options => {
  return new FailsafeSocket(options);
};
