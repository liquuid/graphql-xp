const db = require('../config/db')

const newUser = { 
    name: 'Peter',
    email: 'peter@sdpfsf.com',
    password: '123'
}

async function exe(){
    // count
    const qt = await db('users')
        .count('* as qt').first()
    
    if(qt === 0){
        await db('users').insert(newUser)
    }
    let { id } = await db('users')
        .select('id').limit(1).first()

    await db('users').where({id})
        .update({ 
            name: 'Peter Parker',
            email: 'email@emaill.com'
        })
    return db('users').where({ id })
}

exe()
    .then(user => console.log(user))
    .finally(() => db.destroy())
