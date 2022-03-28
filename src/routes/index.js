const { Router } = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  changeStatus,
} = require("../controllers");

const router = Router();

router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").put(updateTodo).delete(deleteTodo).patch(changeStatus);

module.exports = router;
