const express = require("express")
//const { graphqlHTTP } = require('express-graphql');
const typeDefs = require("./graphql/schema")
const resolvers = require("./graphql/resolvers")
const mongoose = require("mongoose")
const cors = require("cors")
const { ApolloServer } = require('apollo-server-express');

//const app = express()

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: graphqlSchema,
//     rootValue: graphqlResolvers,
//     graphiql: true,
//   })
// )

mongoose.connect('mongodb+srv://elhamvei:Abc_1234@cluster0.quqgho6.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(err)
});


//app.listen(3000, () => { console.log('Server is running...') });

const app = express();

app.use(cors())

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 80 }, () =>
    console.log(`Server ready at http://localhost:80/graphql`)
  );
})();