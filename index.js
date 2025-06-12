let app=require("./src/app.js");
let port=1000;

app.listen(port,(req,res)=>{
    console.log("Server Started "+port);
})