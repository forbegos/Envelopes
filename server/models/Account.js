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
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Account = model("Account", accountSchema);

module.exports = Account;
