const express = require("express")
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require("./graphql/schema")
const graphqlResolvers = require("./graphql/resolvers")
const mongoose = require("mongoose")


const app = express()

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
)

mongoose.connect('mongodb+srv://elhamvei:Abc_1234@cluster0.quqgho6.mongodb.net/comp3133_assigment1?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(err)
});

app.listen(3000, () => { console.log('Server is running...') });