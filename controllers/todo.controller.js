const todoService = require("../services/todo.service");

class TodoController {
    async create(req, res) {
        try {
            const newTodo = await todoService.create(req.body);
            return res.json(newTodo);
        } catch (error) {
            res.json({ message: String(error) });
        }
    }
    async getById(req, res) {
        try {
            const { id } = req.params;
            const todo = await todoService.getById(id);
            return res.json(todo);
        } catch (error) {
            res.json({ message: String(error) });
        }
    }
    async getAll(req, res) {
        try {
            const todos = await todoService.getAll();
            return res.json(todos);
        } catch (error) {
            res.json({ message: String(error) });
        }
    }
    async updateById(req, res) {
        try {
            const updatedTodo = await todoService.updateById(req.body);
            return res.json(updatedTodo);
        } catch (error) {
            res.json({ message: String(error) });
        }
    }
    async deleteById(req, res) {
        try {
            const { id } = req.params;
            await todoService.deleteById(id);
            res.status(200).json();
        } catch (error) {
            res.json({ message: String(error) });
        }
    }
}

module.exports = new TodoController();
