const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const Tasks = mongoose.model("Tasks", TaskSchema);
module.exports = { Tasks };