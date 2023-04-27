//logic to get ang questions
//import css schema
const  angulars=require("../models/angularschema")
exports.angularcontroller=async(req,res)=>{
    try{
        const angularstore=await angulars.find()
        res.status(200).json(angularstore)
    }
    catch(error){
        res.status(400).json(error)
 
    }
}