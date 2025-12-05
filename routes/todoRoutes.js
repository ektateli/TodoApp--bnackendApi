const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const todo = require("../controllers/todoController");

router.post("/", authMiddleware, todo.createTodo);
router.get("/", authMiddleware, todo.getTodos);
router.patch("/:id", authMiddleware, todo.updateTodo);
router.delete("/:id", authMiddleware, todo.deleteTodo);

module.exports = router;
