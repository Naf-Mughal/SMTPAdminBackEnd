const mongoose = require('mongoose')
const { Schema, model } = mongoose;
const LinkSchema = new Schema({
    linkUrl: { type: String, required: true, min: 3, unique: true },
    username: { type: String, required: true, min: 3},
    password: { type: String, required: true, min: 8, },
    usernameTag: { type: String, required: true,},
    passwordTag: { type: String, required: true,},
    buttonTag: { type: String, required: true,},
});
const LinkModel = model('link', LinkSchema);
module.exports = LinkModel;