const { buildSchema } = require("graphql")

module.exports = buildSchema(`
type Employee {
    _id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }

  input EmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    salary: Float!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }
  
  type Query {
    employees: [Employee!]
    users: [User!]
  }
  
  type Mutation {
    createEmployee(employee:EmployeeInput): Employee
    createUser(user:UserInput): User
  }
  
  schema {
    query: Query
    mutation: Mutation
  }
  `)


