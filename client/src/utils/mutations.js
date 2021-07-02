import { gql } from "@apollo/client";

//add a user
export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      user {
        _id
        name
        password
      }
    }
  }
`;

//remove a user
export const REMOVE_USER = gql`
  mutation removeUser($userId: ID!) {
    removeUser(userId: $userId)
  }
`;

//add an envelope
export const ADD_ENVELOPE = gql`
  mutation addEnvelope($name: String!, $envBalance: Float!) {
    addEnvelope(name: $name, envBalance: $envBalance) {
      _id
      name
      envBalance
    }
  }
`;

//remove an envelope
export const REMOVE_ENVELOPE = gql`
  mutation removeEnvelope($envelopeId: ID!) {
    removeEnvelope(envelopeId: $envelopeId)
  }
`;

//add an account transaction
export const ADD_ACCOUNT_TRANSACTION = gql`
  mutation addAccountTransaction(
    $accountId: ID!
    $name: String!
    $amount: Float!
    $type: Boolean!
  ) addAccountTransaction(accountId: $accountId, name: $name, amount: $amount, type: $type){
    transactions {
      amount
      name
      type
    }
  }
`;

//remove an account transaction

//add an envelope transaction
export const ADD_ENVELOPE_TRANSACTION = gql`
  mutation addEnvelopeTransaction(
    $envelopeId: ID!
    $name: String!
    $amount: Float!
    $type: Boolean!
    )addEnvelopeTransaction(accountId: $accountId, name: $name, amount: $amount, type: $type){
        transactions {
            amount
            name
            type
        }
    }
`;

//remove an envelope transaction

//add an account
export const ADD_ACCOUNT = gql`
  mutation addAccount(
    $name: String!
    $type: Boolean!
    $accountBalance: Float!
  ) {
    addAccount(name: $name, type: $type, accountBalance: $accountBalance) {
      accountId
      name
      type
      accountBalance
    }
  }
`;

//remove an account
