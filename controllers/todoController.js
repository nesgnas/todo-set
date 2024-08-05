
const fs = require('fs');
const path = require('path');

const todosFilePath = path.join(__dirname, '../data/todos.json');


// read data from file
const readTodosFromFile = () => {
  const data = fs.readFileSync(todosFilePath, 'utf-8');
  return JSON.parse(data);
};

// write data to file
const writeTodosToFile = (todos) => {
  fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2), 'utf-8');
};

// controller methods for GET 'api/todos'
exports.getAllTodos = (req, res) => {
  const todos = readTodosFromFile();
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(todos));
};


// controller methods for GET 'api/todos/:id'
exports.getTodo = (req, res, id) => {
  // read data from file
  const todos = readTodosFromFile();

  // find the todo with the given id
  const todo = todos.find(t => t.id === id);

  if (todo) { // if todo is found
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todo));
  } else { // handle error if todo is not found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Todo not found' }));
  }
};

// controller methods for POST 'api/todos'
exports.createTodo = (req, res) => {
  let body = '';

  // read data from the request
  req.on('data', chunk => {
    body += chunk.toString();
  });


  req.on('end', () => { // when all data is read, parse the data and save it to the file

    // parse the data intoNewTodo
    const newTodo = JSON.parse(body);
    newTodo.id = Date.now().toString(); // Simple ID generation

    // read data from file, add the new todo, and write the data back to the file
    const todos = readTodosFromFile();
    todos.push(newTodo);
    writeTodosToFile(todos);

    // respond to the client with the newly created todo
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newTodo));
  });
};

// controller methods for PUT 'api/todos/:id'
exports.updateTodo = (req, res, id) => {
  let body = '';
  req.on('data', chunk => {
    body += chunk.toString();
  });
  req.on('end', () => {
    // read data from file
    const todos = readTodosFromFile();

    // find the index of the todo with the given id | -1 if not found
    const index = todos.findIndex(t => t.id === id);

    if (index !== -1) {// if todo is found

      // write code here


    } else { // handle error if todo is not found

      // write code here

    }
  });
};

// controller methods for DELETE 'api/todos/:id'
exports.deleteTodo = (req, res, id) => {
  // read data from file
  const todos = readTodosFromFile();

  // find the index of the todo with the given id | -1 if not found
  const index = todos.findIndex(t => t.id === id);

  if (index !== -1) { // if todo is found

    // write code here
    // Quy trình 1: tìm các xóa object có id nằm trong mảng được cung cấp
    // Gợi ý 2: todos là mảng được nhắc đến
    // Quy trình 2: ghi dữ liệu vào file

  } else { // handle error if todo is not found

    // write code here

  }
};
