import { gql } from "@apollo/client";

//query all users
export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      email
      password
      envelopes {
        _id
        name
        envBalance
        transactions {
          name
          amount
          type
        }
      }
    }
  }
`;

//query a single user
export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      password
      envelopes {
        _id
        name
        envBalance
        transactions {
          name
          amount
          type
        }
      }
    }
  }
`;

//query all envelopes
export const QUERY_ENVELOPES = gql`
  query allEnvelopes {
    envelopes {
      _id
      name
      envBalance
      transactions {
        name
        amount
        type
      }
    }
  }
`;

//query a single envelope
export const QUERY_SINGLE_ENVELOPE = gql`
  query singleEnvelope($envelopeId: ID!) {
    envelope(envelopeId: $envelopeId) {
      _id
      name
      envBalance
      transactions {
        name
        amount
        type
      }
    }
  }
`;

//query all accounts
export const QUERY_ACCOUNTS = gql`
  query allAccounts {
    accounts {
      _id
      name
      type
      accountBalance
      transactions {
        name
        amount
        type
      }
    }
  }
`;

//query a single account
export const QUERY_SINGLE_ACCOUNT = gql`
  query singleAccount($accountId: ID!) {
    transaction(accountId: $accountId) {
      _id
      name
      type
      accountBalance
      transactions {
        name
        amount
        type
      }
    }
  }
`;

// export const QUERY_TRANSACTIONS = gql`
//   query allTransactions {
//     transactions {
//       _id
//       transAmount
//       deposit
//     }
//   }
// `;

// export const QUERY_SINGLE_TRANSACTION = gql`
//   query singleTransaction($transId: ID!) {
//     transaction(transId: $transId) {
//       _id
//       transAmount
//       deposit
//     }
//   }
// `;
