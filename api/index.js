import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('database is connected')).catch((err)=>console.log(err))

const app = express()



app.use(express.json())


app.use('/api/test',userRoutes)
app.use('/api/auth',authRoutes)


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Something Wrong'

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


app.listen(3000,()=>{
    console.log("server is running on 3000 port!!")
})


