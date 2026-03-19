const { faker } = require('@faker-js/faker');
const array = [];

const fakeLocation = async () => {
  for (let i = 0; i < 50; i++) {
    array.push({
      city: faker.location.city(),
      state: faker.location.state(),
    });
  }
  return array;
};

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE locations CASCADE');
  // await knex('locations').del();
  await fakeLocation();
  await knex('locations').insert(array);
};
