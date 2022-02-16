const { Types } = require("mongoose");
const TodoModel = require("../models/todo.model");

const validateId = (id) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new Error("Id is not valid");
    }
};

class TodoService {
    async create(todoData) {
        try {
            const todo = await TodoModel.create(todoData);
            return todo;
        } catch (error) {
            throw error;
        }
    }
    async getById(id) {
        try {
            validateId(id);
            const todo = await TodoModel.findById(id);
            return todo;
        } catch (error) {
            throw error;
        }
    }
    async getAll() {
        try {
            const todos = await TodoModel.find();
            return todos;
        } catch (error) {
            throw error;
        }
    }
    async updateById(todoData) {
        try {
            validateId(todoData?.id);
            todoData.updatedAt = Date.now();
            const updatedTodo = await TodoModel.findByIdAndUpdate(
                todoData.id,
                todoData,
                {
                    new: true,
                }
            );
            return updatedTodo;
        } catch (error) {
            throw error;
        }
    }
    async deleteById(id) {
        try {
            validateId(id);
            await TodoModel.deleteOne({ _id: id });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new TodoService();
