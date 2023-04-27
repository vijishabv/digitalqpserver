
//import mongoose
const mongoose=require('mongoose')
//get connection string from env
const DB = process.env.DATABASE

//get connectionstring from .env
mongoose.connect(DB,{
    
    useUnifiedTopology:true,
    useNewUrlParser:true

}).then(()=>{
    console.log("qp database started");
}).catch((error)=>{
    console.log(error);
})
