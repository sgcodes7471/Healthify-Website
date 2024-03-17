console.log("Healthify Website");
const path=require("path");
const express=require("express");
const app=express();
const port=3000;

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static('views'));
app.set('view engine' , 'hbs');
app.get('/' , (req, res)=>{
    res.render('index.hbs');
})
app.route('/macros')
.get((req, res)=>{
    res.render('macros.hbs');
})
.post((req, res)=>{
    let age=req.body.age;
    let height=req.body.height;
    let weight=req.body.weight;
    let cal=1000;
    let pro=100;
    let car=200;
    let fat=10;
    if(age=="" || height=="" || weight==""){
        res.render('macros.hbs');
    }
    else{
        console.log(req.body);
        res.render('macros.hbs' , {calories:cal} );
    }
})

app.route('/bmi')
.get((req , res)=>{
    res.render('bmi.hbs');
})
.post((req, res)=>{
    let age=req.body.age;
    let height=req.body.height;
    let weight=req.body.weight;
    if(age=="" || height=="" || weight==""){
        res.render("bmi.hbs")
    }
    else{
        height=height/100;
    let bmi=weight/(height*height);
    let txt="";
    if(bmi<18.5){
        txt="UnderWeight";
    }
    else if(bmi<24.5){
        txt="Normal Weight";
    }
    else if(bmi<30){
        txt="OverWeight";
    }
    else{
        txt="Obese";
    }
    res.render('bmi.hbs' , {BMI:txt});
    }
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})