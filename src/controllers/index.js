const Todo = require("../models/Todo");

module.exports = {
  getAllTodos: async (req, res) => {
    try {
      const findAllTodos = await Todo.findAll();
      return res.status(200).json(findAllTodos);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to get all todos.",
        error: error,
      });
    }
  },
  createTodo: async (req, res) => {
    try {
      const { title, description } = req.body;
      const createTodo = await Todo.create({
        title,
        description,
      });
      if (!createTodo) {
        return res.status(400).json({
          message: "Failed to create todo.",
        });
      }
      return res.status(201).json({
        message: "Todo has been created successfully.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to create todo.",
        error: error,
      });
    }
  },
  updateTodo: async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
      const updateTodo = await Todo.update(
        {
          title,
          description,
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (!updateTodo) {
        return res.status(400).json({
          message: "Failed to update todo.",
        });
      }
      return res.status(200).json({
        message: "Todo has been updated successfully.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to update todo.",
        error: error,
      });
    }
  },
  changeStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { isComplete } = req.body;
      const updateTodo = await Todo.update(
        {
          isComplete,
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (!updateTodo) {
        return res.status(400).json({
          message: "Failed to update todo.",
        });
      }
      return res.status(200).json({
        message: "the status has been updated successfully.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to update todo.",
        error: error,
      });
    }
  },
  deleteTodo: async (req, res) => {
    const { id } = req.params;
    try {
      const deleteTodo = await Todo.destroy({
        where: {
          id: id,
        },
      });
      if (!deleteTodo) {
        return res.status(400).json({
          message: "Failed to delete todo.",
        });
      }
      return res.status(200).json({
        message: "Successfully deleted todo.",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Failed to delete todo.",
        error: error,
      });
    }
  },
};
