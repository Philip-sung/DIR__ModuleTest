import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from './config/database';
import typeDefs from './modules/post/graphqlScema';
import resolvers from './modules/post/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

//Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () => {
    console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
})