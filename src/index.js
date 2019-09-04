import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers
})

server.start({port: 80}, () => console.log('server start'));