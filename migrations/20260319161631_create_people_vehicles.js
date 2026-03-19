exports.up = function (knex) {
  return knex.schema.createTable('people_vehicles', table => {
    table.increments('id');
    table.varchar('vin').notNullable();
    table.varchar('vrm').notNullable();
    table.integer('vehicles_id').notNullable();
    table.foreign('vehicles_id').references('vehicles.id');
    table.integer('people_id').notNullable();
    table.foreign('people_id').references('people.id');
  });
};

exports.down = function (knex) {
  return knex.schema
    .alterTable('people_vehicles', table => {
      table.dropForeign('vehicles_id');
      table.dropForeign('people_id');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('people_vehicles');
    });
};
