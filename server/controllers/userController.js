import userModel from "../models/userModel.js"

export const getUsers = async (req, res, next) => {
    try {
        const users = await userModel.find()
        res.status(200).json(users)
    } catch (error) {
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await userModel.findById(id)
        if(!user){
            return res.status(200).send({
                error:"User Not found"
            })
        }
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

export const addUser = async (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        return res.json("Empty Body!")
    }
    try {
        if (userModel.find({ username: req.body.username })) {
            return res.json("User already exists!")
        }

        const user = new userModel(req.body)
        res.send(await user.save())
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {

    const user = req.body;
    const { id } = req.params;

    try {
        const updateUser = await userModel.findByIdAndUpdate(id, user, { new: true });
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
    // findByIdAndUpdate() ==> return previous document 
    // so for returning new document, 
    // pass this object as a parameter ==> { new: true }
}

export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedUser = await userModel.findByIdAndDelete(id);
        res.status(200).json(deletedUser);
    }
    catch (error) {
        next(error)
    }
}

export const addTodo = async(req,res,next)=>{
    
}
