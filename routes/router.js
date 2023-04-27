//imposrt express
const express=require("express")
const jwt=require('jsonwebtoken')
const cors=require("cors")
//Router()
const router=new express.Router()
//import controller
router.use(express.json())
router.use(cors())
//token verification middleware
const jwtmiddleware=(req,res,next)=>{
    console.log('json web token');
    // get token from request
    const token=req.headers['verifytoken']
    console.log(token)
    //verify token
    try{
    const dataa=jwt.verify(token,"supersecretkey")
    console.log(dataa);
    next()
    }
    catch(error){
        res.status(400).json("please login")
    }
}
const controller=require('../controllers/questionscontroller')
const registercontrollers  = require("../controllers/registercontroller")
const htmlcontroller=require("../controllers/htmlcontroller")
const jscontroller=require("../controllers/jscontroller")
const csscontroller=require("../controllers/csscontroller")
const angularcontroller=require("../controllers/angularcontroller")
//import registercontroller
//router for qs store
router.post('/questions/questionsstore',jwtmiddleware,controller.questioncontroller)
//router to get qp
router.get('/questions/qpget',jwtmiddleware,controller.qpgetcontroller)
//router for register
router.post('/registers/register',registercontrollers.registercontroller)
//router for html questions
router.get('/htmls/htmlstore',jwtmiddleware,htmlcontroller.htmlcontroller)
//router for jsquestions
router.get('/jss/jsstore',jwtmiddleware,jscontroller.jscontroller)
//router for css questions
router.get('/css/cssstore',jwtmiddleware,csscontroller.csscontroller)
//router for angular questions
router.get('/angulars/angularstore',jwtmiddleware,angularcontroller.angularcontroller)
//router for login
router.post('/login',registercontrollers.loginController)

//export router
module.exports=router