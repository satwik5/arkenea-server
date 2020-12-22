const { userInformation } = require("../models/index.js");
const multer = require('multer');

const storage = multer.diskStorage({
  destination:(req, file, callBack) =>{
    callBack(null, './app/public/images');
  },
  filename:(req, file,callBack)=>{
    callBack(null, `${file.originalname}`)
  }
})
var upload= multer({storage:storage});
module.exports = app => {
    const userinformation = require("../controllers/userinformation.controller.js");
  
    var router = require("express").Router();
  
     
     router.post("/getuser", userinformation.getUser);
     router.post("/file",upload.single('file'), userinformation.addFile);
     router.get("/checksession", userinformation.checkSession);
     router.get("/logout",userinformation.logout);
     router.get("/getcredentials",userinformation.getCreds);
     router.get("/deleteuser/:id",userinformation.deleteUser);
     router.post("/edituser",userinformation.editUser);
    app.use('/api/userinformation', router);
  }; 
