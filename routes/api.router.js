const { Router } = require("express");
const TodoController = require("../controllers/todo.controller");

const apiRouter = new Router();

apiRouter.post("/todo", TodoController.create);
apiRouter.get("/todo/:id", TodoController.getById);
apiRouter.get("/todos", TodoController.getAll);
apiRouter.put("/todo", TodoController.updateById);
apiRouter.delete("/todo/:id", TodoController.deleteById);

module.exports = apiRouter;
