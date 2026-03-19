const { faker } = require('@faker-js/faker');
const array = [];

const fakeVehicle = async () => {
  for (let i = 0; i < 50; i++) {
    array.push({
      manufacturer: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
    });
  }
  return array;
};

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE locations CASCADE');
  await knex('vehicles').del();
  await fakeVehicle();
  await knex('vehicles').insert(array);
};
