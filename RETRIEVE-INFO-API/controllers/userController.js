const mongoose = require('mongoose');
const User = require('../models/userModels');

// send user information
exports.userInformation = async (req,res) =>{
 try {
   const users = await User({
      email: req.body.email,
      github_url: req.body.github_url,
      current_dateTime: req.body.current_dateTime
   })
    const saveUser = await users.save()
    console.log(saveUser)
    res.status(200).json(saveUser);
    
   
 } catch (error) { 
    res.status(403).json(error.message);
 }
} 

//get info from database

exports.retrieveInfo = async (req,res)=>{
   try {
      const users = await User.find()
      res.status(200).json(users)
   } catch (error) {
      res.status('403').json(error)
   }
}