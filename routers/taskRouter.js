const express = require('express');

const db = require('../data/db-config');
const Tasks = require('../helpers/task-helper');

const router = express.Router();


router.get('/', (req, res) => {

    // SELECT Tasks.*, project.name, project.description
    // FROM [Tasks]
    // JOIN [Projects]
    // ON Tasks.project_id = Projects.id

    // db('tasks')
    Tasks.getTasks()
        .join('projects', 'tasks.project_id', '=', 'projects.id')
        .select('tasks.*', 'projects.name', 'projects.description')
        .then(tasks => {
            res.status(200).json({ tasks })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Failed to retrieve data.' })
        });

    // Tasks.getTasks()
    //     .then(tasks => {
    //         res.status(200).json(tasks);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.status(500).json({ errorMessage: 'Failed to retrieve tasks.' })
    //     });
});


router.post('/', (req, res) => {
    const { description, notes, project_id } = req.body;
    const taskData = { description, notes, project_id };

    Tasks.addTask(taskData)
        .then(addedTask => {
            if (!description || !project_id) {
                res.status(400).json({ message: 'Please provide task name and corresponding project ID.' });
            } else {
                res.status(201).json({ addedTask });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Error occurred while posting task.' });
        });
});


module.exports = router;
