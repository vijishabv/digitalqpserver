//define schemafor register
const mongoose=require('mongoose')
//create schema using mongoose
const registerschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    regno:{
        type:Number,
        required:true,
        unique:true

    },
    pswd:{
        type:String,
        required:true,
        unique:true
    },
    cpassword:{
        type:String,
        required:true,
        unique:true
    }
})
//create collection/model
const registers=mongoose.model('registers', registerschema)
module.exports=registers