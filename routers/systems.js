const express=require('express');
const router=express.Router();
const System=require('../models/Systems');
const User=require('../models/Users');

router.get('/', async(req, res) => {
    //
    // res.send(req.query.username);
    const user=await User.findOne({username:req.query.username})
    const user_id=user._id

    const systems=await System.find({user_id});
    res.json({status:true,systems})
  });
  
router.post('/create', async (req, res) => {
    //
    const user=await User.find({username:req.query.username})
    const user_id=user[0]._id

    const system=new System({
        title:req.body.title,
        user_id,
        bit_id:req.body.bit_id,
        type:"simple_key"
    });

    try{
        const savedSystem=await system.save();
        res.json({message:'new simple key saved!',status:true,savedSystem})

    }catch(err){
        res.json({message:'has error in create new controller!',status:false,err:err})
    }


    
    // res.json({ id : "_x" , title: req.body?.title,code:req.body?.code,type:'simple',value:false})
});


  
router.post('/update', (req, res) => {
    //
    
});


  
router.delete('/:systemId', async(req, res) => {
    //
    try{
            const deletedSystem=await System.remove({_id:req.params.systemId});
            res.json(deletedSystem)
        }catch(error){
            res.json(err);
        }
});

  
router.patch('/:systemId', async(req, res) => {
    //
    try{
            const updatedSystem=await System.updateOne({_id:req.params.systemId},
                {$set:{
                    title:req.body.title,
                    bit_id:req.body.bit_id
                }
            });
            res.json(updatedSystem)
        }catch(error){
            res.json(err);
        }
});

  module.exports=router;