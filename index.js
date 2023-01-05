const express = require('express');
const multer = require('multer');
require('./config');
const User = require('./user');

const app = express();
app.use(express.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callBack) {
      callBack(null, 'uploads');
    },
    filename: function (req, file, callBack) {
      const splitFileType = file.mimetype.split('/');
      const extension = splitFileType[splitFileType.length - 1];
      callBack(null, file.fieldname + '_' + Date.now() + '.' + extension);
    },
  }),
}).single('user_file');

app.post('/upload', upload, (req, resp) => {
  resp.send('File uploaded');
});

app.listen(8000);
