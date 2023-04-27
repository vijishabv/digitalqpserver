//define schemafor css
const mongoose=require('mongoose')
//using mongoose define schema
const cssschema=mongoose.Schema({
    /*
question
"who are you my friend"
option1
"vini"
option2
"viji"
option3
"vinisha"
option4
"vijisha"
rightanswer
"vinisha"*/
id:{
    type:Number,
    required:true,
    unique:true
},
question:{
    type:String,
    required:true,
    unique:true
    
},
option1:{
    type:String,
    required:true
},
option2:{
    type:String,
    required:true
},
option3:{
    type:String,
    required:true
},
option4:{
    type:String,
    required:true
},
rightanswer:{
    type:String,
    required:true
}

}
)
//create model using this schema
const csses=mongoose.model("csses",cssschema)
//export model
module.exports=csses