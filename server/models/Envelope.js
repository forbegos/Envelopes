const { Schema, model } = require("mongoose");

const envelopeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  envBalance: {
    type: Number,
    required: true,
    default: 0,
  },
  transaction: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});

const Envelope = model("Envelope", envelopeSchema);

module.exports = Envelope;
