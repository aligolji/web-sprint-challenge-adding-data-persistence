const express = require('express');

const db = require('../data/db-config');
const Resources = require('../helpers/resource-helper');

const router = express.Router();


router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Failed to retrieve resources.' })
        });
});


router.post('/', (req, res) => {
    const { name, description } = req.body;
    const resourceData = { name, description };

    Resources.addResource(resourceData)
        .then(addedResource => {
            if (!name) {
                res.status(400).json({ message: 'Please provide resource name.' });
            } else {
                res.status(201).json({ addedResource });
            };
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'Error occurred while posting resource.' });
        });
});

module.exports = router;
