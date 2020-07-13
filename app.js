//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');

const getDate = require('./date');

const app = express();

var items = ['Buy Food','Cook Food','Eat Food'];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',function(req,res){
    var day = getDate();
    
    res.render("list", {listTitle:day, newListItems:items});
});

app.post('/',function(req,res){
    let item = req.body.newItem;

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }
    

});

app.get('/work', function(req,res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post('/work', function(req,res){
    let item = req.body.newItem;
    item.push(item);

    res.redirect('/');
});

app.listen(3000,function(){
    console.log('the app is listening on port 3000');

});