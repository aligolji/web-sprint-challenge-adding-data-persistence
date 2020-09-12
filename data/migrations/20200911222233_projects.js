
exports.up = function (knex) {
    return knex.schema
        .createTable('Projects', tbl => {
            tbl.increments();

            tbl.string('Project Name', 128)
                .notNullable();

            tbl.string('Project Description', 500);

            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.integer('task_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('tasks')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.boolean('Project Complete')
                .notNullable()
                .defaultTo(false);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Projects');
};
