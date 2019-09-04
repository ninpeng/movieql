import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  options: { static: 'build' }
})

server.start({port: 80}, () => console.log('server start'));