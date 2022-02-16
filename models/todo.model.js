const { Schema, model } = require("mongoose");

const TodoModel = new Schema({
    body: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    isImportant: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = model("Todo", TodoModel);
