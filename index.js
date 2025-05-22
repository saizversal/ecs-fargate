const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from ECS!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
