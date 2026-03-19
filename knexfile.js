module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      password: 'docker',
      user: 'postgres',
      port: 5432,
      database: 'dmv',
    },
  },

  staging: {
    client: '',
    connection: {},
  },

  production: {
    client: '',
    connection: {},
  },
};
