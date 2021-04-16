// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'todo',
      user:     'admin',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'tasks'
    }
  }

};
