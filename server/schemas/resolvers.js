const { Account } = require("../models");

const resolvers = {
  Query: {
    accounts: async () => {
      return await Account.find({});
    },

    account: async (parent, { accountId }) => {
      return await Account.findOne({ _id: accountId });
    },
  },

  Mutation: {
    addAccount: async (parent, args) => {
      return await Account.create(args);
    },
    removeAccount: async (parent, { accountId }) => {
      return await Account.findOneAndDelete({ _id: accountId });
    },
  },
};

module.exports = resolvers;
