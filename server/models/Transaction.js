const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  transAmount: {
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
  envelope: {
    type: Schema.Types.ObjectId,
    ref: "Envelope",
  },
});

const Transaction = model("Transaction", transactionSchema);

module.exports = Transaction;
