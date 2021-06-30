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
    envBalance: Float
  }

  type Transaction {
    _id: ID
    transAmount: Float
    deposit: Boolean
  }

  type Account {
    _id: ID
    name: String
    type: Boolean
    accountBalance: Float
  }

  type Query {
    users: [User]
    user(userId: ID!): User

    envelopes: [Envelope]
    envelope(envelopeId: ID!): Envelope

    transactions: [Transaction]
    transaction(transId: ID!): Transaction

    accounts: [Account]
    account(accountId: ID!): Account
  }

  type Mutation {
    addUser(name: String, email: String, password: String): User
    removeUser(userId: ID!): User

    addEnvelope(name: String, envBalance: Float): Envelope
    removeEnvelope(envelopeId: ID!): Envelope

    addTransaction(
      name: String
      transAmount: Float
      deposit: Boolean
    ): Transaction
    removeTransaction(transId: ID!): Transaction

    addAccount(name: String, type: Boolean, accountBalance: Float): Account
    removeAccount(accountId: ID!): Account
  }
`;

module.exports = typeDefs;