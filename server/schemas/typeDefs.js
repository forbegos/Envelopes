const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    envelopes: [Envelope]
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
    transactions: [Transaction]
  }

  type Query {
    users: [User]
    user(userId: ID!): User

    envelopes: [Envelope]
    envelope(envelopeId: ID!): Envelope

    accounts: [Account]
    account(accountId: ID!): Account
  }
  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addUser(name: String, email: String, password: String): Auth
    login(email: String!, password: String!): Auth
    removeUser(userId: ID!): User

    addEnvelope(userId: ID, name: String, envBalance: Float): Envelope
    removeEnvelope(envelopeId: ID!): Envelope

    addAccount(name: String, type: Boolean, accountBalance: Float): Account
    removeAccount(accountId: ID!): Account

    addEnvelopeTransaction(
      envelopeId: ID!
      name: String
      amount: Float
      type: Boolean
    ): Envelope

    addAccountTransaction(
      accountId: ID!
      name: String
      amount: Float
      type: Boolean
    ): Account
  }
`;

module.exports = typeDefs;
