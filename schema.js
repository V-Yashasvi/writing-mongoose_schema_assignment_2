const mongoose=require('mongoose')

const commentSchema= new mongoose.Schema({
    username:{
        type:String
    },
    message:{
        type:String,
        required: true
    },
    commentedat:{
        type:Date,
        default:Date.now
    }
})

const BlogSchema= new mongoose.Schema({
    title:{
        type:String,
        unique:true,
        min: 5
    },
    content:{
        type:String,
        required: true,
        min:50
    },
    author:{
        type: String,
        default:'General'
    },
    tags:{
        type:[String]
    },
    category:{
        type:String,
        default:'General'
    },
    likes:{
        type:[String]
    },
    createdat:{
        type: Date,
        default:Date.now
    },
    updatedAt:{
        type:Date
    },
    comments:{
        type:commentSchema,
        required: true
    }
})

module.exports=mongoose.model('blog', BlogSchema)