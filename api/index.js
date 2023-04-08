const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require("../graphql/schema");
const resolvers = require("../graphql/resolvers");
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const http = require('http');

mongoose.connect('mongodb+srv://elhamvei:Abc_1234@cluster0.quqgho6.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(err)
});


const app = express();
app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);

const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer(app, httpServer);

module.exports = httpServer;