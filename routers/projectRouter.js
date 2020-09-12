const express = require('express');

const db = require('../data/db-config');
const Projects = require('../helpers/project-helper');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Failed to retrieve projects.' })
        });
});


router.get('/:id', (req, res) => {
    const { id } = req.params;

    Projects.getProjectsByID(id)
        .then(project => {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: 'Could not find specified project.' });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Failed to retrieve project.' })
        });
});


router.get('/:id/resources', (req, res) => {

});


router.get('/:id/tasks', (req, res) => {

});


router.post('/', (req, res) => {
    const { name, description } = req.body;
    const projectData = { name, description };

    Projects.addProject(projectData)
        .then(addedProject => {
            if (!name) {
                res.status(400).json({ message: 'Please provide project name.' });
            } else {
                res.status(201).json({ addedProject });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Error occurred while posting project.' });
        });
});


module.exports = router;
