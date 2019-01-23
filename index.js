var express = require('express');

//App setup

var app = express();
var server = app.listen(9000, function() {
    console.log(`Server started on port 9000`);
});

//static files
app.use(express.static('public'));