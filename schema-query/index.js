const { ApolloServer, gql } =  require('apollo-server');
const typeDefs = gql`
    scalar Date
    # entry points
    type Query {
        hello: String
        dateNow: Date
    }
`
const resolvers = {
    Query: {
        hello() {
             return "Hi !!!"
        },
        dateNow() {
            return new Date;
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