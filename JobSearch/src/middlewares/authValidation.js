'use strict';

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/environment/environment");
const { unauthorized,forbidden } = require("../helpers/sendStatus");


function authValidation(req,res,next){
    const bearer = req.headers.authorization

    if (
        bearer &&
        bearer.startsWith('Bearer')
    ){
        // const split = bearer.split("Bearer ")

        // const token = split[1]
        const [,token] = bearer.split("Bearer ") //Destructuring

        if(token){
            try{
                const decoded = jwt.verify(token,jwtSecret)

                console.log(decoded)

                req.user = decoded

                return next()
 
            }catch({message,name}){
                // const message = error.message
                // const name = error.name
                return res.status(forbidden).json({
                    error:true,
                    message,
                    type:name
                })
            }
            
        }
    }

    

    return res.status(forbidden).json({
        error:true,
        message:"Insufficient permissions"
    })
}

function adminValidation(req,res,next){
    if(req.user.role==="admin"){
        return next()
    }else{
        return res.status(forbidden).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}
function applicantValidation(req,res,next){
    if(req.user.role==="applicant"){
        return next()
    }else{
        return res.status(forbidden).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}
function employerValidation(req,res,next){
    if(req.user.role==="employer"){
        return next()
    }else{
        return res.status(forbidden).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}
function employerAdminValidation(req,res,next){
    if(req.user.role==="employer" || req.user.role==="admin"){
        return next()
    }else{
        return res.status(forbidden).json({
            error:true,
            message:"Insufficient permissions"
        })
    }
}

function authMiddleware(type){
    let middlewares
    if(type==="employer"){
        middlewares=[authValidation,employerValidation]
    }else if(type==="employer-admin"){
        middlewares=[authValidation,employerAdminValidation]
    }else if(type==="applicant"){
        middlewares=[authValidation,applicantValidation]
    }else if(type==="admin"){
        middlewares=[authValidation,adminValidation]
    }else{
        middlewares=[]
    }

    return middlewares
}


module.exports = authMiddleware








module.exports = authValidation;