
exports.seed = function (knex) {
  const tasks = [
    {
      id: 1,
      project_id: 3,
      description: 'task to completed 1',
      notes: 'work through this task and completed it and then move on to the next one.',
      completed: false,
    },
    {
      id: 2,
      project_id: 2,
      description: 'task to completed 2',
      notes: 'once this is done, take a break.',
      completed: false,
    },
    {
      id: 3,
      project_id: 4,
      description: 'task to completed 3',
      notes: 'this ones a doozy.',
      completed: false,
    },
    {
      id: 4,
      project_id: 1,
      description: 'task to completed 4',
      notes: 'make sure to pay attention and watch out for trip points.',
      completed: false,
    },
    {
      id: 5,
      project_id: 1,
      description: 'task to completed 5',
      notes: 'this will be as easy as taking candy from a baby',
      completed: false,
    },
  ];

  return knex('tasks')
    .insert(tasks);
};
