import userModel from "../models/userModels.js";

export default class UserManager{

    getUser = (params) =>{
        return userModel.findOne(params)
    }

    createUser = (user)=>{
        return userModel.create(user)
    }

    getUserById = (id)=>{
        return userModel.findById(id)
    }

    updateUser =(id, user)=>{
        return userModel.findByIdAndUpdate(id, user)
    }

    deleteUser = (id)=>{
        return userModel.findByIdAndDelete(id)
    }
}