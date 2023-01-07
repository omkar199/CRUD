const express = require('express');
const Event = require('events');

const app = express();

const event = new Event();

event.on('countApi', () => {
  console.log('event called');
});

app.get('/', (req, resp) => {
  resp.send('api called');
  event.emit('countApi');
});

app.listen(8000);
