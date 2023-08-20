const connection = require("./../connection");

exports.getAllTodo = (req, res) => {
  const query = "select todoName,todoDetails from todo;";
  connection.query(query, (err, result) => {
    if (!err) {
      return res.status(200).json({
        status: "success",
        message: "All todo fetched successfully.",
        data: result,
      });
    } else {
      return res.status(500).json(err);
    }
  });
};
exports.createTodo = (req, res) => {
  const { todoName, todoDetails } = req.body;
  const query = "insert into todo (todoName,todoDetails) values (?,?);";
  connection.query(query, [todoName, todoDetails], (err, result) => {
    if (!err) {
      console.log(result);
      return res.status(200).json({
        status: "success",
        message: "Todo created successfully.",
      });
    } else {
      return res.status(500).json(err);
    }
  });
};
exports.updateTodo = (req, res) => {
  const allTodo = null;
  return res.status(200).json({
    status: "success",
    data: allTodo,
  });
};
exports.deleteTodo = (req, res) => {
  const allTodo = null;
  return res.status(200).json({
    status: "success",
    data: allTodo,
  });
};
