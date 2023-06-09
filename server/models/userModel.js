import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    todoList: Array
 } )
 const userModel = mongoose.model("User", userSchema);
 export default userModel