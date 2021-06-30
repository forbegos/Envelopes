const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Envelope {
    _id: ID
    name: String
    envBalance: Number
  }

  type Transaction {
    _id: ID
    transAmount: Number
    deposit: Boolean
  }

  type Account {
    _id: ID
    name: String
    type: Boolean
    accountBalance: Number
  }

  type Query {
    users: [User]
    account(userId: ID!): User
    envelopes: [Envelope]
    transactions: [Transaction]
    transaction(transId: ID!): Transaction
    envelope(envelopeId: ID!): Envelope
    accounts: [Account]
    account(accountId: ID!): Account
  }

  type Mutation {
    addUser(name: String, email: String, password: String): User
    removeUser(userId: ID!): User
    addEnvelope(name: String, envBalance: Number): Envelope
    removeEnvelope(envelopeId: ID!): Envelope
    addTransaction(
      name: String
      transAmount: Number
      deposit: Boolean
    ): Transaction
    removeTransaction(transId: ID): Transaction
    addAccount(name: String, type: Boolean, accountBalance: Number): Account
    removeAccount(accountId: ID!): Account
  }
`;

module.exports = typeDefs;
