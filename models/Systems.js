const mongoose=require('mongoose');
const SystemsSchema=mongoose.Schema({

    bit_id:{
        type:String,
        required:true,
    },
    type:{
        type:String,
        required:false,
        default:'simple_key'
    },
    
    title:{
        type:String,
        required:false,
        default:"key#"
    },
    user_id:{
        type:String,
        required:true
    }

},{
  timestamps: true
});

module.exports=mongoose.model('System',SystemsSchema)
