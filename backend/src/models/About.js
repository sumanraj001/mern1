import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,

    },


    title:{
        type:String,
        required:true,
    },

    slug:{
        type:String,
        required:true,
        unique:true

    },
    description:{
        type:String,
        

    },

    summary:{
        type:String,
        required:true,
        

    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    createAt:{
        type:Date,
        default:Date.now,
    },
    updateAt:{
        type:Date,

        default:Date.now,

    }



});

export default mongoose.models('About',aboutSchema);