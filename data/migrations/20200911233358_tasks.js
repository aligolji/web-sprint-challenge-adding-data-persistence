
exports.up = function (knex) {
    return knex.schema
        .createTable('Tasks', tbl => {
            tbl.increments();

            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.string('Task Description', 250)
                .notNullable();

            tbl.string('Task Notes', 750);

            tbl.boolean('Task Complete')
                .notNullable()
                .defaultTo(false);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Tasks')
};
