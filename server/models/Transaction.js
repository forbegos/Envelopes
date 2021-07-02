const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  deposit: {
    //   True = deposit, false = widthdrawal
    type: Boolean,
    required: true,
    default: true,
  },
});

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
