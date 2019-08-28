const { users, nextID } =
    require('../data/db')

module.exports = {
    // { name, email, age })
    newUser(_, args) {
        const emailExists = users
            .some(u => u.email === args.email)
        if(emailExists){
            throw new Error('Email already on DB')
        }
        const novo = {
            id: nextID(),
            ...args,
            role_id: 1,
            status: 'ACTIVE'
        }

        users.push(novo)
        return novo
    },
    removeUser(_, { id }){
        const i = users
            .findIndex(u => u.id === id)
        if (i < 0) return null
        const excluded = users.splice(i, 1)
        return excluded ? excluded[0] : null
    }
}