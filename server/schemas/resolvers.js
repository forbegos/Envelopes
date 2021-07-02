const { Account, User, Envelope } = require("../models");

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
    addEnvelope: async (parent, { userId, name, envBalance }) => {
      console.log(name, envBalance);
      return await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            envelopes: {
              name: name,
              envBalance: envBalance,
            },
          },
        },
        { new: true, runValidators: true }
      );
    },
    // addEnvelope: async (parent, { name }) => {
    //   return await Envelope.create({ name });
    // },

    removeEnvelope: async (parent, { envelopeId }) => {
      return await Envelope.findOneAndDelete({ _id: envelopeId });
    },

    // Transaction mutations --------------------------------

    addEnvelopeTransaction: async (
      parent,
      { envelopeId, name, amount, type }
    ) => {
      console.log(name, amount, type);
      return await Envelope.findOneAndUpdate(
        { _id: envelopeId },
        {
          $addToSet: {
            transactions: {
              name: name,
              amount: amount,
              type: type,
            },
          },
        },
        { new: true, runValidators: true }
      );
    },

    addAccountTransaction: async (
      parent,
      { accountId, name, amount, type }
    ) => {
      console.log(name, amount, type);
      return await Account.findOneAndUpdate(
        { _id: accountId },
        {
          $addToSet: {
            transactions: {
              name: name,
              amount: amount,
              type: type,
            },
          },
        },
        { new: true, runValidators: true }
      );
    },

    // Account mutations --------------------------------
    addAccount: async (parent, { name, type }) => {
      return await Account.create({ name, type });
    },
    removeAccount: async (parent, { accountId }) => {
      return await Account.findOneAndDelete({ _id: accountId });
    },
  },
};

module.exports = resolvers;
