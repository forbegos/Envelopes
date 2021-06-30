const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Account {
    _id: ID
    name: String
    type: Boolean
    amount: Int
  }

  type Query {
    accounts: [Account]
    account(accountId: ID!): Account
  }

  type Mutation {
    addAccount(name: String, type: Boolean, amount: Int): Account
    removeAccount(accountId: ID!): Account
  }
`;

module.exports = typeDefs;
