
exports.seed = function (knex) {
  const resources = [
    {
      id: 1,
      name: 'computer',
      description: 'use google and other resources to assist in completing projects.',
      project_id: 3
    },
    {
      id: 2,
      name: 'microphone',
      description: 'make live calls to discuss the possibilities.',
      project_id: 4
    },
    {
      id: 3,
      name: 'conference room',
      description: 'meet in person to present.',
      project_id: [1, 2]
    },
  ]

  return knex('resources')
    .insert(resources);
};
