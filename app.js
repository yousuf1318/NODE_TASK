const express=require("express")
const app=express();
require("./models/connect");
require("./models/schama");
app.use(express.json())
app.use(express.urlencoded({extended:false}));
const router = require("./routers/router");
app.use("/",router)

app.listen(3000,()=>{
    console.log("server is running at: 3000");
})
