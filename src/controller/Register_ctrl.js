const {saveRegisterInfo,checkLoginModel } = require("../model/Register_model");
exports.getRegisterPage = (req, res) => {
    res.render("Register.ejs",{message:""});
};


exports.saveInfoCrt = async (req, res) => {
    try {
        let { uname, upass, uemail, ucontact, ucity } = req.body;


       
        let result = await saveRegisterInfo(uname, upass, uemail, ucontact, ucity);
        res.render("Register.ejs", { message: result ? "Registration Successful" : "Registration Failed" });
    } catch (err) {
        console.error("Controller Error:", err.message);
        res.render("Register.ejs", { message: "An error occurred during registration." });
    }
};
exports.getLoginCtrl=(req,res)=>{


    res.render("login.ejs");
}


exports.checkLoginCtrl=async(req,res)=>{


    try
    {
        let{uname,upass}=req.body;
        let result=await checkLoginModel(uname,upass);
        if(result)
        {
            res.render("home.ejs");
        }
        else
        {
            res.render("login.ejs",{msg:"Login Failed"});
        }
    }
    catch(err)
    {
        console.log("Error in Controlled ",err.message);
        res.render("login.ejs",{msg:"Login Failed"});


    }
}
