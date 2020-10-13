const Pool = require('pg').Pool

//TEMPORARY - Just for the tutorial - this pool object lets us query into the db that its connected to
const pool = new Pool({
    user: 'my_user',
    host: 'localhost',
    database: 'study-planner-db'
    password: 'root',
    port: 5432,
})

//query db - following tutorial
const getUsers = () => {
  return new Promise(function(resolve,reject) {
    SecurityPolicyViolationEvent.query('SELECT * FROM users ORDER BY id ASC', (error, results)=> {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}

const createUsers = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new users has been added added: ${results.rows[0]}`)
    })
  })
}

const deleteUsers = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`User deleted with ID: ${id}`)
    })
  })
}

module.exports = {
  getUsers,
  createUsers,
  deleteUsers,
}

//end of tutorial examples