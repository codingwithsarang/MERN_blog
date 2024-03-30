import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req,res)=>{
    let {email, username, password} = req.body
    

    if(!username || !email || !password || username === '' || email === '' || password=== ''){
        res.status(400).send('All field is required')
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
        res.status(500).json({message: error.message})
    }
}