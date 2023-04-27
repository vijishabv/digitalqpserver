//logic to get css questions
//import css schema
const  csses=require("../models/cssschema")
exports.csscontroller=async(req,res)=>{
    try{
        const cssstore=await csses.find()
        res.status(200).json(cssstore)
    }
    catch(error){
        res.status(400).json(error)
 
    }
}