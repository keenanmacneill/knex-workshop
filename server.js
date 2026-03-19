const express = require('express');
const knex = require('knex')(require('./knexfile')['development']);
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('You have arrived!');
});

app.get('/vehicles', (req, res) => {
  knex('vehicles')
    .select('*')
    .then(data => {
      res.status(200).json(data);
    });
});

app.post('/vehicles', (req, res) => {
  const { manufacturer, model } = req.body;
  knex('vehicles')
    .insert({ manufacturer, model })
    .returning('*')
    .then(data => {
      res.status(201).json(data[0]);
    });
});

app.delete('/vehicles/:id', (req, res) => {
  knex('vehicles')
    .where('id', req.params.id)
    .del()
    .returning('*')
    .then(data => {
      res.status(200).json(data[0]);
    });
});

app.get('/people', (req, res) => {
  knex('people')
    .select('*')
    .then(data => {
      res.status(200).json(data);
    });
});

app.post('/people', (req, res) => {
  const { full_name, job_title, phone, locations_id } = req.body;
  knex('people')
    .insert({ full_name, job_title, phone, locations_id })
    .returning('*')
    .then(data => {
      res.status(201).json(data[0]);
    });
});

app.get('/locations', (req, res) => {
  knex('locations')
    .select('*')
    .then(data => {
      res.status(200).json(data);
    });
});

app.post('/locations', (req, res) => {
  const { city, state } = req.body;
  knex('locations')
    .insert({ city, state })
    .returning('*')
    .then(data => {
      res.status(201).json(data[0]);
    });
});

app.patch('/locations/:id', (req, res) => {
  const { city, state } = req.body;
  knex('locations')
    .where('id', req.params.id)
    .update({ city, state })
    .returning('*')
    .then(data => {
      res.status(201).json(data[0]);
    });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
