const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


//const routers go here

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

//server.use router api's go here

server.get('/', (req, res) => {
    res.send(`
        <h2>Web Sprint - Data Persistence</h2>
    `);
});

module.exports = server;
