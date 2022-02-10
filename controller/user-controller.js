import { response } from 'express';
import User from '../modal/userSchema.js';
export const userSignup = async (request,response)=>{
    try{
        const exist = await User.findOne({username:request.body.username});
        if(exist){
            return response.status(401).json("UserName is already exist");
        }
      const user = request.body;
      const newuser = new User(user);
         await newuser.save();
         response.status(200).json("User is successfully registered")
    }catch(error){
        console.log('Error:',error.message);
    }
}
export const userLogin = async(request,response)=>{
    try{
        let user= await User.findOne({username:request.body.username , password:request.body.password});
        if(user){
            return response.status(200).json(`${request.body.username}login successfully`);
        }
        else{
            return response.status(401).json("invalid Login");
        }

    }catch(error){
        console.log('Error :',error.message);
    }
}