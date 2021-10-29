const mongoose=require('mongoose');
const ControllersSchema=mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:false,
        default:'simple'
    },
    
    value:{
        type:String,
        required:false,
        default:false
    }

},{
  timestamps: true
});

module.exports=mongoose.model('Controllers',ControllersSchema)
