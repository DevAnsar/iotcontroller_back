const mongoose=require('mongoose');
const BitsSchema=mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    value:{
        type:String,
        required:false,
        default:null
    },
    user_id:{
        type:String,
        required:true
    }

},{
  timestamps: true
});

module.exports=mongoose.model('Bits',BitsSchema)
