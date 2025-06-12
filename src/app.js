let express = require("express");
let bodyparser = require("body-parser");
let router=require("./route/Register_router");
let app=express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
let path=require("path");
app.use(express.static(path.join(__dirname,'..','public')));
app.set('view engine','ejs');
app.use("/",router);
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
module.exports=app;