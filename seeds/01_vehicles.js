const { faker } = require('@faker-js/faker');

const fakeVehicle = async num => {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push({
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
    });
  }
  return array;
};

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE vehicles CASCADE');
  // await knex('vehicles').del();
  await knex('vehicles').insert(...fakeVehicle(50));
};
