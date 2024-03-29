import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRouter from './routes/user.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('database is connected')).catch((err)=>console.log(err))

const app = express()


app.use('/test',userRouter)

app.listen(3000,()=>{
    console.log("server is running on 3000 port!!")
})


