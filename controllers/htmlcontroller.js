//logic to get all questions of js
//import schema
const htmls=require('../models/htmlschema')
exports.htmlcontroller=async(req,res)=>{
console.log('inside html store');
try{
    const htmlstore=await htmls.find()
    res.status(200).json(htmlstore)
}
catch(error){
    res.status(401).json(error)
}
}