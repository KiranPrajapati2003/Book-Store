const mongoose = require('mongoose')
const booksData = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    language:{
        type:Array,
        required:true
    },
    page:{
        type:String,
        required:true
    },
    isbn:{
        type:Number,
        required:true
    }
})
const userModel = mongoose.model('bookTbl',booksData)
module.exports = userModel