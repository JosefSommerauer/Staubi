var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public', {index: 'index.html'}));

lirc_node = require('lirc_node');
lirc_node.init();

console.log(lirc_node.remotes);

app.get('/home', function (req, res) {
  lirc_node.irsend.send_once("staubi", "KEY_HOME", function() {
    res.json({'res':true});
    console.log('home');
  });
});

app.get('/clean', function (req, res) {
  lirc_node.irsend.send_once("staubi", "KEY_CLEAR", function() {
    res.json({'res':true});
    console.log('clean');
  });
});

app.get('/left', function (req, res) {
  lirc_node.irsend.send_once("staubi", "KEY_LEFT", function() {
    res.json({'res':true});
    console.log('left');
  });
});

app.get('/right', function (req, res) {
  lirc_node.irsend.send_once("staubi", "KEY_RIGHT", function() {
    res.json({'res':true});
    console.log('right');
  });
});

app.get('/up', function (req, res) {
  lirc_node.irsend.send_once("staubi", "KEY_UP", function() {
    res.json({'res':true});
    console.log('up');
  });
});


app.get('/down', function (req, res) {
  lirc_node.irsend.send_once("staubi", "KEY_DOWN", function() {
    res.json({'res':true});
    console.log('down');
  });
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

