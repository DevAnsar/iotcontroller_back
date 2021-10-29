const express=require('express');
const router=express.Router();
const Bits=require('../models/Bits');
const User = require('../models/Users');


router.get('/', async(req, res) => {
    //
    try{
        const user=await User.findOne({username:req.query.username})
        const user_id=user._id

        await Bits.find({user_id:user_id}).then(bits=>{
    

            res.json({
                "status":200,
                "bits":bits
            });
        }).catch(err=>{
            res.json({status:400,message:"bit not fint!"})
        });
      
        

    }catch(err){
        res.json({message:'error!',status:false,err:err})
    }
  });

  
router.get('/get_data/value/:bitId', async(req, res) => {
    //
    try{
        const user=await User.findOne({username:req.query.username})
        const user_id=user._id

        const bit_id=req.params.bitId;
        await Bits.findOne({_id:bit_id,user_id}).then(bit=>{
            const value=bit.value;
            const bit_id=bit._id;

            res.json({
                "status":200,
                "value":(value=='true'),
                // "bit_id":bit_id
            });
        }).catch(err=>{
            res.json({status:400,message:"bit not fint!"})
        });
      
        

    }catch(err){
        res.json({message:'error!',status:false,err:err})
    }
  });

  
router.post('/create', async (req, res) => {
    //


    try{
        const user=await Users.find({username:req.body.username})
        const user_id=user[0]._id

        const bit=new Bits({
            user_id:user_id,
            name:req.body.bit_name
        });

        await bit.save();

        res.json({message:'bit created for you!',bit})

    }catch(err){
        res.json({message:'error!',status:false,err:err})
    }
});


  
router.patch('/:bitId',async(req, res) => {
    //

    try{

        const user=await User.findOne({username:req.query.username})
        const user_id=user._id

    const updatedBit=await Bits.updateOne({_id:req.params.bitId,user_id},{$set:{value:req.body.value}});

    res.json({status:true,updatedBit})

}catch(err){
    res.json({status:false});
}
    
});


  
router.delete('/distroy', (req, res) => {
    //
    
});


  module.exports=router;