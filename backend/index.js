import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import TodoModel from "./Models/Todo.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.post("/add", (req, res) => {
    const task = req.body.task;
    TodoModel.create({ task: task })
    .then(result => { res.json(result) })
    .catch(err => { res.json(err) });

});

app.get("/get", (req, res) => { 
    TodoModel.find()
    .then(result => { res.json(result) })
    .catch(err => { res.json(err) });
});




app.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete( id )
        .then(result => { res.json(result) })
        .catch(err => { res.json(err) });
 });


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
