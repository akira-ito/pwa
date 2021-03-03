import 'graphql-import-node';
import * as userSchema from './user/domain/schema.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import UserGraphQLInterfaces from './user/interfaces';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [userSchema],
  resolvers: [UserGraphQLInterfaces],
});
export default schema;
