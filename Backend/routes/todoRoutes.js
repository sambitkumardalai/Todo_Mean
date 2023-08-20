const express = require("express");
const todoController = require("./../controllers/todoController");
const router = express.Router();

router.route("/getAllTodo").get(todoController.getAllTodo);
router.route("/createTodo").post(todoController.createTodo);
router.route("/updateTodo").patch(todoController.updateTodo);
router.route("/deleteTodo").patch(todoController.deleteTodo);

module.exports = router;
