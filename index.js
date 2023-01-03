const express = require('express');
require('./config');
const User = require('./user');

const app = express();
app.use(express.json());

app.post('/create', async (req, resp) => {
  let data = new User(req.body);
  let result = await data.save();
  console.log(result);
  resp.send(result);
});
app.get('/list', async (req, resp) => {
  let result = await User.find();
  console.log(result);
  resp.send(result);
});
app.put('/update/:_id', async (req, resp) => {
  let result = await User.updateOne(req.params, { $set: req.body });
  console.log(result);
  resp.send(result);
});
app.delete('/delete/:_id', async (req, resp) => {
  let result = await User.deleteOne(req.params);
  console.log(result);
  resp.send(result);
});

app.listen(8000);
