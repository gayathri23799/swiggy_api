const bodyparser = require('body-parser')
const express = require('express')
const mongoose = require(mongoose)

const {Restaurants} = require('./schema.cjs')
const app = express()

async function connectToDb(){
    try{
        await mongoose.connect('mongodb+srv://gayathri23799:Gaya123@cluster0.2fvzkdy.mongodb.net/Swiggy?retryWrites=true&w=majority')
        console.log('DB connection established;)')
        const port = 8000
        app.listen(port,function(){
            console.log(`listening on port${port}...`)
        })
    }catch(error){
        console.log(error)
        console.log('Could\'t establish connection:(')
    }
    }
connectToDb