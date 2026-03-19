const { faker } = require('@faker-js/faker');
const array = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fakePeopleVehicles = async () => {
  for (let i = 0; i < 50; i++) {
    array.push({
      vin: faker.vehicle.vin(),
      vrm: faker.vehicle.vrm(),
      vehicles_id: getRandomInt(1, 50),
      people_id: getRandomInt(1, 50),
    });
  }
  return array;
};

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE people_vehicles CASCADE');
  // await knex('people_vehicles').del();
  await fakePeopleVehicles();
  await knex('people_vehicles').insert(array);
};
