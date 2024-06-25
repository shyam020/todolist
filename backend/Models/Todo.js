import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    done : { type: Boolean, default: false }
});

const TodoModel = mongoose.model("Todo", TodoSchema);
export default TodoModel;
