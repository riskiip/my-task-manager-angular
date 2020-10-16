const express = require("express");
const app = express();
const { Lists, Tasks } = require('./db/models');

// Routing the API
app.get('/lists', (req, res) => {
    res.send("Hello world");
})

app.post('/lists', (req, res) => {

})

app.patch("/lists/:id", (req, res) => {

})

app.delete("/lists/:id", (req, res) => {

})

// Listen on Port 3000
app.listen(3000, () => {
    console.log("Server now is listening on port 3000");
})
