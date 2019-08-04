const { roles } = require('../data/db')

module.exports = {
    wage(user) {
        return user.wage_usd
    },
    role(user){
        const sels = roles
            .filter(p => p.id === user.role_id)
            return sels ? sels[0] : null
    }
}