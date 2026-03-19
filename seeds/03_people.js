const { faker } = require('@faker-js/faker');
const array = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fakePeople = async () => {
  for (let i = 0; i < 50; i++) {
    array.push({
      full_name: faker.person.fullName(),
      job_title: faker.person.jobTitle(),
      phone: faker.phone.number(),
      locations_id: getRandomInt(1, 50),
    });
  }
  return array;
};

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE people  CASCADE');
  // await knex('people').del();
  await fakePeople();
  await knex('people').insert(array);
};
