const user = require('../models/user');


async function read() {
    return await user.find()
}
async function readOne(input) {
    console.log("🚀 ~ file: userController.js ~ line 8 ~ readOne ~ input", input)
    const result = await user.findOne({username: input})
    console.log("🚀 ~ file: userController.js ~ line 10 ~ readOne ~ result", result)
    return await user.findOne({username: input})
}
async function create(newUser) {
    console.log("🚀 ~ file: userController.js ~ line 11 ~ create ~ newUser", newUser)
    return await (new user({username:newUser.username, password:newUser.password}).save());
}
async function update(id, updateUser) {
    return await user.find({_id:id}).update(id, updateUser)
}
async function del(id, update) {
    return await user.findByIdAndUpdate(id, update)
}

module.exports = {read, readOne, create, update, del};