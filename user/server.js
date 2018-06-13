var path = require('path');
var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors());

var staticPath = path.join(__dirname, '/app');
app.use(express.static(staticPath));

app.listen(8888, function() {
  console.log('listening on port 8888');
});
