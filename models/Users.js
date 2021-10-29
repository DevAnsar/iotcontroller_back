const mongoose=require('mongoose');
const UsersSchema=mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:false,
    },
    
    family:{
        type:String,
        required:false,
    }

},{
  timestamps: true
});

module.exports=mongoose.model('Users',UsersSchema)
