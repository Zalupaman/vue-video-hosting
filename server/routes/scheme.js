const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScheme = new Schema({
    name: String,
    email: String,
    password:String,
    videos:[{ videoServerName:String, videoClientName: String }]
}, {collection:'users'});

module.exports = userScheme
