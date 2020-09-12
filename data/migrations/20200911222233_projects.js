
exports.up = function (knex) {
    return knex.schema
        .createTable('Projects', tbl => {
            tbl.increments();

            tbl.string('name', 128)
                .notNullable();

            tbl.string('description', 512);

            tbl.integer('resource_id')
                .unsigned()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.integer('task_id')
                .unsigned()
                .references('id')
                .inTable('tasks')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');

            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Projects');
};
