
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

            tbl.string('description', 256)
                .notNullable();

            tbl.string('notes', 512);

            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Tasks')
};
