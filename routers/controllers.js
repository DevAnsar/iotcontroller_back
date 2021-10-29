const express=require('express');
const router=express.Router();
const Controller=require('../models/Controllers');

router.get('/', (req, res) => {
    //
    const query=Controller.find({});
    res.json(query.json())
  });

  
router.get('/getValue/:code', (req, res) => {
    //
    res.json(true)
  });
  
router.post('/create', async (req, res) => {
    //

    const controller=new Controller({
        title:req.body.title,
    });

    try{
        const savedController=await controller.save();
        res.json({message:'new simple controller saved!',status:true,savedController})

    }catch(err){
        res.json({message:'has error in create new controller!',status:false,err:err})
    }


    
    // res.json({ id : "_x" , title: req.body?.title,code:req.body?.code,type:'simple',value:false})
});


  
router.post('/update', (req, res) => {
    //
    
});


  
router.delete('/distroy', (req, res) => {
    //
    
});


  module.exports=router;