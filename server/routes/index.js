const todoController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => {
  app.get('/api', (req, res) => {
    return res.status(200).send({ message: 'Welcome to the Todos API!'})
  });

  app.post('/api/todos', todoController.create);
  app.get('/api/todos', todoController.list);

  app.get('/api/todos/:todoId', todoController.retrieve);
  app.put('/api/todos/:todoId', todoController.update);
  app.delete('/api/todos/:todoId', todoController.destroy);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  app.delete('/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy);

  // For any other request method on todo items, we're going to return "Method Not Allowed"
  app.all('/api/todos/:todoId/items', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};