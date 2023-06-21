import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from './config/database.js';
import typeDefs from './modules/post/graphqlSchema.js';
import resolvers from './modules/post/resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
const app = express();

//Use the Express application as middleware in Apollo server
server.applyMiddleware({ app });

app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`Server running on http://localhost:${app.get('port')}${server.graphqlPath}`);
})