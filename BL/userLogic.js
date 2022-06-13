const user = require("../DL/controllers/userController");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


async function createUser (input) {
    const userAlreadyExist = await user.readOne(input.username);
    
    if (userAlreadyExist) {
        return ({message: "user name already exists"});
    }  
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const newUser = {
        username:input.username,
         password:hashedPassword
      }
      const userFromDB = await user.create(newUser)
      return userFromDB.username;
};

async function loginUser (userInput) {
console.log("🚀 ~ file: userLogic.js ~ line 22 ~ loginUser ~ userInput", userInput)
  
  if (userInput.username && userInput.password) {
      let isValidLogin = false;
      let existsUser = await user.readOne(userInput.username);
      
      if (existsUser) {
        isValidLogin = await bcrypt.compare(userInput.password, existsUser.password);
        console.log(isValidLogin)
      }
       
      if (isValidLogin) {
        const accessToken = jwt.sign(
          JSON.stringify(existsUser),
          process.env.TOKEN_SECRET
        );
        existsUser.password = undefined;
        return accessToken;
      } else {
        throw ({message: "Invalid credentials"})
      }
    } else {
      throw ({message: "Status 400 => Please supply username and password"});
    }
};


async function getUsers(){
  const users = await user.read();
  return users;
}

async function getUserAndSurveys(id){
  const userWithHisSurvey = await user.readOne(id);
  return userWithHisSurvey;
}

module.exports = {createUser, loginUser, getUsers};