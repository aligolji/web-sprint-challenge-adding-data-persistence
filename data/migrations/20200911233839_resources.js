
exports.up = function (knex) {
    return knex.schema
        .createTable('Resources', tbl => {
            tbl.increments();

            tbl.string('Resource Name', 220)
                .notNullable()
                .index()
                .unique();

            tbl.string('Resource Description', 500);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Resources');
};
