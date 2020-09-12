const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectRouter = require('./routers/projectRouter');
const taskRouter = require('./routers/taskRouter');
const resourceRouter = require('./routers/resourceRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

server.get('/', (req, res) => {
    res.send(`
        <h2>Web Sprint - Data Persistence</h2>
    `);
});

module.exports = server;
