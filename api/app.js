const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { Lists, Tasks } = require('./db/models');
const { mongoose } = require('./db/mongoose');

// Declare the Middleware
app.use(bodyParser.json());

// Routing the API
app.get('/lists', (req, res) => {
    Lists.find().then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send("Error: ", e)
    })
})

app.post('/lists', (req, res) => {
    let title = req.body.title;
    let newList = new Lists({
        title
    });
    newList.save().then((listDoc) => {
        res.send(listDoc);
    })
})

app.patch("/lists/:id", (req, res) => {

})

app.delete("/lists/:id", (req, res) => {

})

// Listen on Port 3000
app.listen(3000, () => {
    console.log("Server now is listening on port 3000");
})
