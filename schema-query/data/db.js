const users = [{
    id: 1,
    name: "Aaaaa Aaaaaa",
    email: "aaa@aaa.com",
    age: 29,
    role_id: 1,
    status: 'ACTIVE',
},{
    id: 2,
    name: "Bbbbbb Bbbbb",
    email: "bbb@bbb.com",
    age: 31,
    role_id: 1,
    status: 'INACTIVE',
},{
    id: 3,
    name: "Cccc Ccccc",
    email: "ccc@ccc.com",
    age: 32,
    role_id: 2,
    status: 'BLOCKED',
}]

const roles = [
    {
        id: 1,
        name: "user",
    },    {
        id: 2,
        name: "admin",
}]

module.exports = { users, roles }