const jwt=require('jsonwebtoken')
const questions=require('../models/questionschema')
exports.questioncontroller=async(req,res)=>{
    const {id,question,option1,option2,option3,option4,rightanswer}=req.body
try{
const qp=await questions.findOne({
        id
    })
    if(qp){
        res.status(401).json("questionid already exist")
    }
            else{
              const newUser=new  questions(
                {
                    id,question,option1,option2,option3,option4,rightanswer
                }
              )
              //to store data in mongodb
              await newUser.save()
              
            
                    res.status(200).json("question inserted successfully")

            
            }
    
}
catch(error){
    res.status(401).json(error)

}

}
            //logic t to get questions
exports.qpgetcontroller=async(req,res)=>{
    console.log('inside qpget api');
  try{
const qpget=await questions.find()
   res.status(200).json(qpget)
}
catch(error){
    res.status(401).json(error)
}
}
/*const questions=require('../models/questionschema')
exports.questionscontroller=async(req,res)=>{
    console.log('inside questionstore api');
    const{id,question,option1,option2,option3,option4,rightanswer}=req.body
   
try{
const qpstore = await questions.findOne({id})
console.log(qpstore);
    if(qpstore){
        res.status(401).json("qp already exists")
           
       }
       else{
           const newQuestion=new questions({
                id,
               question,
               option1,
               option2,
               option3,
               option4,
               rightanswer
           })
           await newQuestion.save()
           res.status(200).json("question inserted successfully")
          
       }
    }
    catch(error){
        res.status(401).json("error")
    }
    }

//logic t to get questions
exports.qpgetcontroller=async(req,res)=>{
    console.log('inside qpget api');
  try{
const qpget=await questions.find()
   res.status(200).json(qpget)
}
catch(error){
    res.status(401).json(error)
}
}
*/