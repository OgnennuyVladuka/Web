const Pool = require('pg').Pool

const pool = new Pool({
  user: "postgres",
  password: "a1508345",
  host: "localhost",
  port: 5432,
  datebase: "node"
})


module.exports = pool