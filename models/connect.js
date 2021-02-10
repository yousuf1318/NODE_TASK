const mongoose = require("mongoose");
require("./schama");
mongoose.connect('mongodb://localhost:27017/yousuf',{useNewUrlParser:true,useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log("db is connected");
    }else{
        console.log(" db is not connectrd");
    }
})