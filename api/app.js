const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { Lists, Tasks } = require("./db/models");
const { mongoose } = require("./db/mongoose");

// Declare the Middleware
app.use(bodyParser.json());

// Routing the API
// For Lists
app.get("/lists", (req, res) => {
  Lists.find()
    .then((lists) => {
      res.send(lists);
    })
    .catch((e) => {
      res.send("Error: ", e);
    });
});

app.post("/lists", (req, res) => {
  let title = req.body.title;
  let description = req.body.description;
  let newList = new Lists({
    title,
    description,
  });
  newList.save().then((listDoc) => {
    res.send(listDoc);
  });
});

app.patch("/lists/:id", (req, res) => {
  Lists.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

app.delete("/lists/:id", (req, res) => {
  Lists.findOneAndRemove({ _id: req.params.id }).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

// For Tasks
app.get("/lists/:listId/tasks", (req, res) => {
  Tasks.find({
    _listId: req.params.listId,
  }).then((tasks) => {
    res.send(tasks);
  });
});

app.post("/lists/:listId/tasks", (req, res) => {
  newTask = new Tasks({
    title: req.body.title,
    _listId: req.params.listId,
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  });
});

app.patch("/lists/:listId/tasks/:taskId", (req, res) => {
  Tasks.findOneAndUpdate(
    {
      _id: req.params.taskId,
      _listId: req.params.listId,
    },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

app.delete("/lists/:listId/tasks/:taskId", (req, res) => {
  Tasks.findOneAndRemove({
    _id: req.params.taskId,
    _listId: req.params.listId,
  }).then((removeTaskDoc) => {
    res.send(removeTaskDoc);
  });
});

// Listen on Port 3000
app.listen(3000, () => {
  console.log("Server now is listening on port 3000");
});
