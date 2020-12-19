const express = require("express");
const router = express.Router()
const mongoose = require("mongoose");

const userScheme = require('./scheme')

router.post('/registration', (req, res) => {
    mongoose.connect("mongodb+srv://zalupa-man-1:SergeyM18661@ithub.thgwn.mongodb.net/videoHosting?retryWrites=true&w=majority", { useNewUrlParser: true });
    const User = mongoose.model("User", userScheme);
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    user.save(function(err){
        mongoose.disconnect();  // отключение от базы данных

        if(err) return console.log(err);
        console.log("Сохранен объект", user);
    });
    res.end()
})
router.post('/login', (req, res) => {
    mongoose.connect("mongodb+srv://zalupa-man-1:SergeyM18661@ithub.thgwn.mongodb.net/videoHosting?retryWrites=true&w=majority", {useNewUrlParser: true});
    const User = mongoose.model("User", userScheme);
    User.find({email:req.body.email, password:req.body.password},(err,docs)=>{
        if (err) throw err
        console.log(docs)
        res.send(docs)
    })
})


module.exports = router;
