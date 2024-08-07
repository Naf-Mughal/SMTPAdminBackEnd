const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const LinkSchema = new Schema({
    linkUrl: { type: String },
    name: { type: String, min: 3 },
    username: [{ type: String, ref: "User" }],
});
const LinkModel = model('link', LinkSchema);
module.exports = LinkModel;