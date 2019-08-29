const { roles, nextID } =
    require('../../data/db')

function roleIndex(filter){
    if(!filter) return -1
    const {id, name } = filter
    if(id){
        return roles
            .findIndex( r => r.id === id)

    } else if(name) {
        return roles
            .findIndex( r => r.name === name)
    }

}


module.exports = {
    newRole(_, { data } ) {
        const nameExists = roles
            .some(r => r.name === data.name)
        if(nameExists){
            throw new Error('Role already on DB')
        }
        const novo = {
            id: nextID(),
            ...data,
        }

        roles.push(novo)
        return novo
    },
    removeRole(_, { filter }){
        const i = roleIndex(filter)
        if (i < 0) return null
        const excluded = roles.splice(i, 1)
        return excluded ? excluded[0] : null
    },

    alterRole(_, { filter, data} ){
        const i = roleIndex(filter)

        if (i < 0 ) return null
        roles[i].name = data.name

        return roles[i]
    }
}