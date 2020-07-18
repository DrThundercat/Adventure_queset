const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//loads all the extra javascript and css files
app.use(express.static('public'));


app.get('/', function(req,res){
    res.get('Content-Type');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/public/main.js',function(req,res){
    res.get('Content-Type');
    res.sendFile(path.join(__dirname + '/public/main.js'));
});

app.get('/public/Player.js',function(req,res){
    res.get('Content-Type');
    res.sendFile(path.join(__dirname + '/public/Player.js'));
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));