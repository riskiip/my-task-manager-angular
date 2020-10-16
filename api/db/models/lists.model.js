const mongoose = require("mongoose");
const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

const Lists = mongoose.model("Lists", ListSchema);
module.exports = { Lists };