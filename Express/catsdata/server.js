const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app =express();

app.use(express.static(path.join(__dirname,"static")))
app.use(express.static(path.join(__dirname,"static","images")))
app.use(express.static(path.join(__dirname,"static","stylesheets")))
app.use(express.static(path.join(__dirname,'views')));

app.set('view engine','ejs'); // to use the ejs templating engine

// app.set('views',path.join(__dirname,'views'));

// app.use(bodyParser.urlencoded({extended:true}));
//bodyParser.urlencoded({ extended: false }) allows your app to read data from URLs (GET requests)

app.get('/cats',function(request,response){
        response.render('cats');
})

app.get('/cat1',function(request,response){
    cat ={
        name:"cat1",
        picsource:"cat1.jpg",
        favoriteFood: "Spaghetti",
        age:3,
        sleepingSpots:["under the bed","in the sunbeam"]

    }
    response.render('display',{allcats:cat});
})

app.get('/cat2',function(request,response){
    cat ={
        name:"Chubby",
        picsource:"cat2.jpg",
        favoriteFood: "crackers",
        age:2,
        sleepingSpots:["couch  ","in the car"]

    }
    response.render('display',{allcats:cat});
})


app.listen(port,function(){
    console.log("I am listening on port",port)
})