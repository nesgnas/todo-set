
const http = require('http');
const todoRouter = require('./routers/todoRouter');

const server = http.createServer((req, res) => {
    todoRouter(req, res);
});

const PORT =  3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
