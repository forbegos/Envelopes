const db = require("../config/connection");
const { Account, Envelope, User } = require("../models");

const accountData = require("./accountData.json");
const envelopeData = require("./envelopeData.json");
const userData = require("./userData.json");

db.once("open", async () => {
  await User.deleteMany({});
  await Envelope.deleteMany({});
  await Account.deleteMany({});

  const users = await User.insertMany(userData);
  const accounts = await Account.insertMany(accountData);
  const envelopes = await Envelope.insertMany(envelopeData);

  console.log("seeding completed!");
  process.exit(0);
});
