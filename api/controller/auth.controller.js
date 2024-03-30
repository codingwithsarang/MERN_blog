import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signup = async (req,res, next)=>{
    let {email, username, password} = req.body
    

    if(!username || !email || !password || username === '' || email === '' || password=== ''){
        next(errorHandler(400, 'All field are required ')) 
    }

    const hashedPassword = bcryptjs.hashSync(password ,10)

    const newUser = new User({
        email, 
        username,
        password: hashedPassword})
    try {
        await newUser.save()
        res.json({message: 'signUp successful'})
    } catch (error) {
        next(error)
    }
}