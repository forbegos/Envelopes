const { Account, User, Envelope, Transaction } = require("../models");

const resolvers = {
  Query: {
    // User queries --------------------------------------
    users: async () => {
      return await User.find({});
    },

    user: async (parent, { userId }) => {
      return await User.findOne({ _id: userId });
    },

    // Envelope queries --------------------------------------
    envelopes: async () => {
      return await Envelope.find({});
    },

    envelope: async (parent, { envelopeId }) => {
      return await Envelope.findOne({ _id: envelopeId });
    },

    // Transaction queries --------------------------------------
    transactions: async () => {
      return await Transaction.find({});
    },

    transaction: async (parent, { transId }) => {
      return await Transaction.findOne({ _id: transId });
    },

    // Account queries --------------------------------------
    accounts: async () => {
      return await Account.find({});
    },

    account: async (parent, { accountId }) => {
      return await Account.findOne({ _id: accountId });
    },
  },

  Mutation: {
    // User mutations --------------------------------

    addUser: async (parent, args) => {
      return await User.create(args);
    },

    removeUser: async (parent, { userId }) => {
      return await User.findOneAndDelete({ _id: userId });
    },

    // Envelope mutations --------------------------------

    addEnvelope: async (parent, args) => {
      return await Envelope.create(args);
    },

    removeEnvelope: async (parent, { envelopeId }) => {
      return await Envelope.findOneAndDelete({ _id: envelopeId });
    },

    // Transaction mutations --------------------------------

    addTransaction: async (parent, args) => {
      return await Transaction.create(args);
    },

    removeTransaction: async (parent, { transId }) => {
      return await Transaction.findOneAndDelete({ _id: transId });
    },

    // Account mutations --------------------------------
    addAccount: async (parent, args) => {
      return await Account.create(args);
    },
    removeAccount: async (parent, { accountId }) => {
      return await Account.findOneAndDelete({ _id: accountId });
    },
  },
};

module.exports = resolvers;
