const db = require('../config/db')

const newRole = { 
    name: 'filler',
    label: 'Filler'
}

db('roles').insert(newRole)
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())