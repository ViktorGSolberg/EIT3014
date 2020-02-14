const mongoose = require("mongoose");

const Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId;

const arrStripsLimit = val => {
  return val.length !== 10;
};

const arrBoxLimit = val => {
  return val.length !== 9;
};

const parkSchema = new Schema({
  id: ObjectId,
  ledStrips: {
    type: Array,
    validate: [arrStripsLimit, "{PATH} exceeds the limit of 10"]
  },
  ledBoxes: {
    type: Array,
    validate: [arrBoxLimit, "{PATH} exceeds the limit of 9"]
  },
  screen_1: String,
  screen_2: String
});

module.exports = Park = mongoose.model("park", parkSchema);
