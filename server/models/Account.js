const { Schema, model } = require("mongoose");

const accountSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  type: {
    // Default true = checking account, false = savings account
    type: Boolean,
    default: true,
  },
  accountBalance: {
    type: Number,
    required: true,
    default: 0,
  },
  transactions: { type: Array, default: [] },
});

const Account = model("Account", accountSchema);

module.exports = Account;
