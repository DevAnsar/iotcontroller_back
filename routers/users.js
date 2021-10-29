const express=require('express');
const router=express.Router();
const Users=require('../models/Users');

router.get('/', async(req, res) => {
    //
    
    try{
        const users=await Users.find({});
        res.json({message:'all of the users:',users})

    }catch(err){
        res.json({message:'error!',status:false,err:err})
    }
    
  });

  
router.post('/get_data', (req, res) => {
    //
    const user=Users.find({username:req.body.username});
    res.json(user)
  });
  
router.post('/create', async (req, res) => {
    //

    const user=new Users({
        username:req.body.username,
        name:req.body.name,
        family:req.body.family,
    });
    try{
        const savedUser=await user.save();
        res.json({message:'user saved!',status:true,savedUser})

    }catch(err){
        res.json({message:'has error in create new user!',status:false,err:err})
    }
});


  
router.post('/update', (req, res) => {
    //
    
});


  
router.delete('/distroy', (req, res) => {
    //
    
});


  module.exports=router;