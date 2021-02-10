const express = require("express")
const router=express.Router()

const data = require("../models/schama");

router.post("/post",(req,res)=>{
    var mydata = new data(req.body)
    console.log(mydata);
    mydata.save().then((data)=>{
        res.send(data);
        // console.log(data);
        console.log("data inserted successfully");
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/all_classes",(req,res)=>{
    data.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/start_date",(req,res)=>{
    data.find({start_date:req.body.start_date})
    .then((data)=>{
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/:title",(req,res)=>{
    data.find({title:req.params.title})
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err);
    })
})

router.get("/:type",(req,res)=>{
    data.find({type:req.params.type})
    .then((data)=>{
        res.send(data)
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
})




module.exports = router
