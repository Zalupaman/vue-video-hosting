const express = require("express");
const router = express.Router()
const fs = require("fs")
const multer = require("multer")
const mongoose = require("mongoose");
const userScheme = require('./scheme')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'videos')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})

let upload = multer({ storage: storage })
router.post('/upload',upload.single('video'), (req, res) => {
    const userData = JSON.parse(req.body.userData)
     mongoose.connect("mongodb+srv://zalupa-man-1:SergeyM18661@ithub.thgwn.mongodb.net/videoHosting?retryWrites=true&w=majority", { useNewUrlParser: true });
     const User = mongoose.model("User", userScheme);
     const videoPush = {videoServerName: req.file.filename, videoClientName: req.file.originalname  }
    User.updateOne({_id: userData.id}, {$push: {videos: videoPush}},(err, result)=>{
        if (err) throw err
        console.log(result)
        mongoose.disconnect()
    })

    res.end()
})

module.exports = router;
