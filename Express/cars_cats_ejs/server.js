const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app =express();

app.use(express.static(path.join(__dirname,"static")))
app.use(express.static(path.join(__dirname,"static","images")))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// app.use(bodyParser.urlencoded({extended:true}));

app.get('/cars',function(request,response){
    response.render('cars');
})
app.get('/cats',function(request,response){
        response.render('cats');
})
app.get('/cars/new',function(request,response){
    response.render('form');
})

app.listen(port,function(){
    console.log("I am listening on port",port)
})