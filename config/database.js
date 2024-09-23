const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017')
const db = mongoose.connection

db.on('connected',(err)=>{
    if(err){
        console.log('server not start');
        return false;
    }
    console.log('database connected');
    
})
module.exports = db;