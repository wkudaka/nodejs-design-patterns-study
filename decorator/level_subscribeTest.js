'use strict';
const level = require('level');
const levelSubscribe = require('./level_subscribe');


let db = level(__dirname + '/db', {valueEncoding: 'json'});

db = levelSubscribe(db);

db.subscribe(
  {doctype: 'tweet', language: 'en'},
  (k, val) => console.log(val)
)

db.put('1', {doctype: 'tweet', text: 'Hi', language: 'en'});
db.put('2', {doctype: 'company', name:'Acme Co.'});
