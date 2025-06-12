let mysql = require("mysql");

let conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"movierecdb"
});

conn.connect((err)=>{
    if(err){
        console.log("not connected");
    }
    else{
        console.log("connected");
    }
});
module.exports = conn;

//hello