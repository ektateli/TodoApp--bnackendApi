const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;

  const todo = await Todo.create({
    title,
    description,
    userId: req.user.id
  });

  res.json(todo);
};

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

exports.updateTodo = async (req, res) => {
  const { status } = req.body;

  const todo = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    { status },
    { new: true }
  );

  if (!todo) return res.status(404).json({ message: "Todo not found" });

  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id
  });

  if (!todo) return res.status(404).json({ message: "Todo not found" });

  res.json({ message: "Todo deleted" });
};
