const express = require('express');
const knex = require('knex')(require('./knexfile')['development']);

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.status(200).json('You have arrived!');
});
