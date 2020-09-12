
exports.seed = function (knex) {
  const projects = [
    {
      id: 1,
      name: 'project setup',
      description: 'initialize and download needed dependencies',
      resource_id: 3,
      task_id: [4, 5],
      completed: false,
    },
    {
      id: 2,
      name: 'data modeling',
      description: 'using a digital resource or on paper, draw out data model',
      resource_id: 3,
      task_id: 2,
      completed: false,
    },
    {
      id: 3,
      name: 'migrations',
      description: 'create migration files using knex command',
      resource_id: 1,
      task_id: 1,
      completed: false,
    },
    {
      id: 4,
      name: 'seeds',
      description: 'create seed files using knex command',
      resource_id: 2,
      task_id: 3,
      completed: false,
    },
  ];


  return knex('projects')
    .insert(projects);
};
