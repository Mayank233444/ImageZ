import express from 'express'
import { addCredits, loginUser, registerUser, userCredits } from '../controllers/userController.js';
import authUser from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register' , registerUser)
userRouter.post('/login' , loginUser)  
userRouter.get('/credits' ,authUser, userCredits)  
userRouter.post('/add-credits', authUser, addCredits); 
export default userRouter;