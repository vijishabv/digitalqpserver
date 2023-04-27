//logic to get js questions
//import css schema
const  jsses=require("../models/jsschema")
exports.jscontroller=async(req,res)=>{
    try{
        const jsstore=await jsses.find()
        res.status(200).json(jsstore)
    }
    catch(error){
        res.status(400).json(error)
 
    }
}