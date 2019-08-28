const { users, nextID } =
    require('../data/db')

function userIndex(filter){
    if(!filter) return -1
    const {id, email } = filter
    if(id){
        return users
            .findIndex( u => u.id === id)

    } else if(email) {
        return users
            .findIndex( u => u.email === email)
    }

}


module.exports = {
    // { name, email, age })
    newUser(_, { data } ) {
        const emailExists = users
            .some(u => u.email === data.email)
        if(emailExists){
            throw new Error('Email already on DB')
        }
        const novo = {
            id: nextID(),
            ...data,
            role_id: 1,
            status: 'ACTIVE'
        }

        users.push(novo)
        return novo
    },
    removeUser(_, { filter }){
        const i = userIndex(filter)
        if (i < 0) return null
        const excluded = users.splice(i, 1)
        return excluded ? excluded[0] : null
    },

    alterUser(_, args){
        const i = users
            .findIndex(u => u.id === args.id )
        if (i < 0 ) return null
        const user = {
            ...users[i],
            ...args
        }
        users.splice(i, 1, user)
        return user
    }
}