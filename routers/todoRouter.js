
const url = require('url');
const todoController = require('../controllers/todoController');

const todoRouter = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toUpperCase();
    const id = path.split('/')[3]; // Assuming id is the 3rd segment in the URL

    if (method === 'GET' && path === '/api/todos') {
        todoController.getAllTodos(req, res);
    } else if (method === 'GET' && path.startsWith('/api/todos/')) {
        todoController.getTodo(req, res, id);
    } else if (method === 'POST' && path === '/api/todos') {
        todoController.createTodo(req, res);
    } else if (false) {// add a new condition to handle PUT requests
        // use controller method to handle the request here
    } else if (false) {// add a new condition to handle DELETE requests
        // use controller method to handle the request here
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
};

module.exports = todoRouter;
