import userModel from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import validator from 'validator'

const registerUser = async (req ,res) =>{
    try {
        const {name , email , password} = req.body
        if(!name || !email || !password){
            return res.json({success:false , message : 'Missing Details'})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false , message : 'Please enter a valid email'})
        }
        if(password.length < 8){
            return res.json({success:false , message : 'Please enter a strong password'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const userData = {
            name,
            email,
            password:hashedPassword,

        }
        const newUser = new userModel(userData)
        const user = await newUser.save();
        const token = jwt.sign({id:user.id} , process.env.JWT_SECRET)

        res.json({success:true , token , user:{name:user.name}})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

const loginUser = async(req, res)=>{
    try {
        const {email , password} = req.body;
        const user = await userModel.findOne({email})

        if(!user){
            return res.json({success:false , message : 'User does not exist'})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(isMatch){
            const token = jwt.sign({id:user._id} , process.env.JWT_SECRET)
           res.json({success:true , token , user:{name:user.name}})
        }
        else{
            return res.json({success:false , message : 'Invalid credentials'})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

const userCredits = async (req, res) =>{
    try {
        const userId = req.userId
        const user = await userModel.findById(userId)
        res.json({success:true , credits : user.creditBalance , user:{name : user.name}})
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}
const addCredits = async (req, res) => {
  try {
    const userId = req.userId;
    const { creditsToAdd } = req.body;

    const user = await userModel.findById(userId);
    user.creditBalance += creditsToAdd;
    await user.save();

    res.json({ success: true, credits: user.creditBalance });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export {registerUser , loginUser , userCredits ,addCredits}