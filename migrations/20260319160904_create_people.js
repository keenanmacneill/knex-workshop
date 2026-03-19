exports.up = function (knex) {
  return knex.schema.createTable('people', table => {
    table.increments('id');
    table.string('full_name').notNullable();
    table.string('job_title').notNullable();
    table.varchar('phone', 255).notNullable();
    table.integer('locations_id').notNullable();
    table.foreign('locations_id').references('locations.id');
  });
};

exports.down = function (knex) {
  return knex.schema
    .alterTable('people', table => {
      table.dropForeign('locations_id');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('people');
    });
};
