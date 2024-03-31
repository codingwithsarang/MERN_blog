import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'
import jwt from 'jsonwebtoken'

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


export const signin = async(req,res, next)=>{
        const {email, password} = req.body

        if(!email || !password || email === '' || password === ''){
           return next(errorHandler(400, 'All fiields are required'))
        }


        try{
            const validUser = await User.findOne({email})

            if(!validUser){
                return next(errorHandler(404, 'User not Found'))
            }

            const validPassword = bcryptjs.compareSync(password, validUser.password )
            if(!validPassword){
                return next(errorHandler(400, 'Invalid Password'))
            }
            
            const {password: pass, ...rest} = validUser._doc

            const token = jwt.sign(
                {id: validUser._id} , process.env.JWT_SECRET
            )
            

            res.status(200).cookie('access_token', token, {
                httpOnly: true
            }).json(rest)
                
        } catch(error){
            next(error)
        }
}