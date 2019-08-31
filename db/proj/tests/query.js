const db = require('../config/db')

db('roles')
    .then(res => res.map(p => p.name))
    .then(names => console.log(names))
    .finally(() => db.destroy())

db('roles').select('name','id')
    .then(res => console.log(res))
    .finally(() => db.destroy())

db.select('name','id')
    .from('roles')
    .limit(4)
    .then(res => console.log(res))
    .finally(() => db.destroy())

db('roles')
    //·where('name', 'like', '%foo%')
    //·where('id', [1,2,3])
    .where({ id: 2})
    .then(res => console.log(res))
    .finally(() => db.destroy())