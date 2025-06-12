const conn = require("../config/db");

let saveRegisterInfo = (uname, upass, uemail, ucontact, ucity) => {
    return new Promise((resolve, reject) => {
       
        conn.query("insert into userinfo values('0',?,?,?,?,?)", [uname, upass, uemail, ucontact, ucity], (err, result) => {
            if (err) {
                console.log("Error in Query:", err.message);
                reject(err);
            } else {
                console.log("Insert query executed", result);
                resolve(true);
            }
        });
    });
};


let checkLoginModel=(uname,upass)=>{


    return new Promise((resolve,reject)=>{


        conn.query("select * from userinfo where user_name=? and user_password=? ",[uname,upass],(err,result)=>{


                if(err)
                {
                    console.log("Error in select ",err.message);
                    reject(err);
                }
                else
                {
                    if(result.length==1)
                    {
                        console.log("Select Query Executed");
                        console.log("Result ",result.length);
                        resolve(true);
                    }
                    else
                    {
                        console.log("Not found");
                        resolve(false);
                    }
                }


        });
    });


};


module.exports = {saveRegisterInfo,checkLoginModel };
