const db = require('../data/db-config');

module.exports = {
    getTasks,
    addTask,
};


function getTasks() {
    return db('tasks');
};


function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
};
