const db = require('../data/db-config');

module.exports = {
    getProjects,
    getProjectsByID,
    addProject
};


function getProjects() {
    return db('projects');
};


function getProjectsByID(id) {
    return db('project')
        .where({ id })
        .first();
};


function addProject(project) {
    return db('projects')
        .insert(project, 'id')
        // .then(ids => {
        //     const id = ids[0];

        //     return getProjectsByID(id);
        // })
};


function getProjectActions(projectId) {
    return db('tasks')
    .where('project_id', projectId)
    
}