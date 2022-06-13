const express = require("express");
const router = express.Router();
const userLogic = require("../BL/userLogic");
const authJWT = require("../Middleware/authentication");

router.post("/register", async (req, res) => {
  try {
    res.json(await userLogic.createUser(req.body))
    
  }catch (err){
    res.send({status:400, message:err.message || err})
  };
})

router.post("/login", async (req, res) => {
  console.log("🚀 ~ file: userRoute.js ~ line 16 ~ router.post ~ req", req.body)
  try{
    const result = await userLogic.loginUser(req.body)
   
    if (result) {
      res.json(result)
    }else{
      res.status(401).json({message: "Invalid credentials"})
    }
  }catch(err){
    console.log(err)
    res.status(500).json({message: "internal server error"})
  }
})


// router.get("/getUserAndSurveys", async (req, res) => {
//   try{
//   res.send(await userLogic.getUserAndSurveys(req.user._id))
//   }catch(err){
//     res.send({dtatus:400, message:err.message || err})
//   }
// })

router.get("/getAllUsers", async (req, res) => {
  try {
    res.send(await userLogic.getUsers())
  }catch(err){
    res.send({status:400, message:err.message || err})
  }
})


module.exports = router;