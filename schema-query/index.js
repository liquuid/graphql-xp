const { ApolloServer, gql } =  require('apollo-server');
const typeDefs = gql`
    scalar Date
    # entry points
    type Query {
        hello: String
        dateNow: Date
        loggedUser: User
        featuredProduct: Product
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
    }
`
const resolvers = {
    User: {
        wage(user) {
            return user.wage_usd
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