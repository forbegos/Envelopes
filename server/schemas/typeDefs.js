const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
  }

  type Transaction {
    name: String
    amount: Float
    type: Boolean
  }

  type Envelope {
    _id: ID
    name: String
    envBalance: Float
    transactions: [Transaction]
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

    accounts: [Account]
    account(accountId: ID!): Account
  }

  type Mutation {
    addUser(name: String, email: String, password: String): User
    removeUser(userId: ID!): User

    addEnvelope(name: String, envBalance: Float): Envelope
    removeEnvelope(envelopeId: ID!): Envelope

    addAccount(name: String, type: Boolean, accountBalance: Float): Account
    removeAccount(accountId: ID!): Account

    addTransaction(
      envelopeId: ID!
      name: String
      amount: Float
      type: Boolean
    ): Envelope
  }
`;

module.exports = typeDefs;
