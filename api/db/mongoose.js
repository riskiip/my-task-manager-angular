const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TaskManager", { useNewUrlParser: true }).then(() => {
    console.log("Success connect");
}).catch((e) => {
    console.log("Error because: ", e);
})

// To preveent depreciate
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", true);

// Export module
module.exports = { 
    mongoose
};