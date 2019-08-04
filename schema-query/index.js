const { ApolloServer, gql } =  require('apollo-server');
const users = [{
    id: 1,
    name: "Aaaaa Aaaaaa",
    email: "aaa@aaa.com",
    age: 29,
    role_id: 1,
},{
    id: 2,
    name: "Bbbbbb Bbbbb",
    email: "bbb@bbb.com",
    age: 31,
    role_id: 1,
},{
    id: 3,
    name: "Cccc Ccccc",
    email: "ccc@ccc.com",
    age: 32,
    role_id: 2,
},
]
const roles = [
    {
        id: 1,
        name: "user",
    },    {
        id: 2,
        name: "admin",
    },

]
const typeDefs = gql`
    scalar Date
    # entry points
    type Role{
        id: ID
        name: String
    }
    type Query {
        hello: String
        dateNow: Date
        loggedUser: User
        featuredProduct: Product
        numbersLotery: [Int!]!
        users: [User]
        user(id: ID): User
        roles: [Role]
        role(id: ID): Role
    }
    type Product{
        id: ID
        name: String!
        price: Float!
        discount: Float
        final_price: Float
    }
    type User{
        id: ID
        name: String!
        email: String!
        age: Int
        wage: Float
        vip: Boolean
        role: Role
    }
`
const resolvers = {
    User: {
        wage(user) {
            return user.wage_usd
        },
        role(user){
            const sels = roles
                .filter(p => p.id === user.role_id)
                return sels ? sels[0] : null
        }
    },
    Product: {
        final_price(product){
            if(product.discount) {
                return product.price * (1 - product.discount)
            } else {
                return product.price
            }
        }
    },
    Query: {
        hello() {
             return "Hi !!!"
        },
        dateNow() {
            return new Date;
       },
       loggedUser(){
           return {
               id: 1,
               name: "asdf",
               email: "asdf@sdf.com",
               age: "66",
               wage_usd: "666.66",
               vip: true
           }
       },
       featuredProduct(){
           return {
               name: "Computer",
               price: 49999.99,
               discount: 0.15,
           }
       },
       numbersLotery() {
           const crescente = (a, b) => a - b
           return Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(crescente)
       },
       users() {
           return users
       },
       user( _ , args) {
            const selected = users.filter(u => u.id == args.id)
            return selected ? selected[0] : null
        },
        roles() {
            return roles
        },
        role( _ , args) {
            const selected = roles.filter(u => u.id == args.id)
            return selected ? selected[0] : null
        }

    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
})

server.listen().then(( { url }) => {
    console.log(`executando em ${url}`) 
}) 