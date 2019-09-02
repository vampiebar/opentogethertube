module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "db_opentogethertube_dev",
    "host": "127.0.0.1",
    "dialect": "sqlite",
    "operatorsAliases": false,
    "storage": "db/dev.sqlite"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "db_opentogethertube_test",
    "host": "127.0.0.1",
    "dialect": "sqlite",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "db_opentogethertube_prod",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
