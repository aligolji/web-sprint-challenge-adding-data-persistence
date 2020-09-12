
exports.up = function (knex) {
    return knex.schema
        .createTable('Resources', tbl => {
            tbl.increments();

            tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');

            tbl.string('name', 128)
                .notNullable()
                .index()
                .unique();

            tbl.string('description', 256);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Resources');
};
