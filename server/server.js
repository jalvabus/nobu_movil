var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './../www')));

app.listen(15683, function () {
    console.log("Server corriendo en puerto 31481");
});