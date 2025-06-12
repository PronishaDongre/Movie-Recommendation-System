const express = require("express");
const router = express.Router();
const RegCtrl = require("../controller/Register_ctrl");


router.get("/register", RegCtrl.getRegisterPage);
router.post("/saveReg", RegCtrl.saveInfoCrt);


router.get("/getLogin",RegCtrl.getLoginCtrl);
router.post("/checklogin",RegCtrl.checkLoginCtrl);


module.exports = router;