const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
    name: String,
    image: { type: String, default: "default-group-image.png" },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }]
});

const Group = mongoose.model("group", groupSchema);
exports.Group = Group;