// This will be our application entry. We'll setup our server here.
const http = require('http');
const app = require('../app');

const port = parseInt(process.env.Port, 10) || 3000
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
