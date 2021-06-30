const { Schema, model } = require("mongoose");

const envelopeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Envelope = model("Envelope", envelopeSchema);

module.exports = Envelope;
