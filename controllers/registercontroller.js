const registers=require('../models/registerschema')
//import jsonwebtoken
const jwt=require('jsonwebtoken')
exports.registercontroller=async(req,res)=>{
    const {username,regno,desname,batch,pswd,cpassword}=req.body
try{
const register=await registers.findOne({
        regno
    })
    if(register){
        res.status(401).json("user Already registered...")
    }
            else{
              const newUser=new  registers(
                {
                    username,regno,pswd,cpassword

                }
              )
              //to store data in mongodb
              await newUser.save()
              
            
                    res.status(200).json("registered successfully")

            
            }
    
}
catch(error){
    res.status(401).json(error)

}

}
exports.loginController=async(req,res)=>{
    console.log(req.body);
    const{regno,pswd}=req.body
    try{
      const item = await registers.findOne({regno,pswd})
      if(item){
        //generate token
        const token=jwt.sign({loginregno:regno},"supersecretkey")
        const items={ username:item.username,regno:item.regno,pswd:item.pswd,cpassword:item.cpswd,token}
        res.status(200).json(items)
      }
      else{
        res.status(400).json("invalid user credentials")
      }
    }
    catch(error){
        res.status(401).json(error)
    }
}