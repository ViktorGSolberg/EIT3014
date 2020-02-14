const mongoose = require("mongoose");

const Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId;

const parkSchema = new Schema({
  id: ObjectId,
  ledStrips: {
    strip_1: String,
    strip_2: String,
    strip_3: String,
    strip_4: String,
    strip_5: String,
    strip_6: String,
    strip_7: String,
    strip_8: String,
    strip_9: String,
    strip_10: String
  },
  ledBoxes: {
    box_1: String,
    box_2: String,
    box_3: String,
    box_4: String,
    box_5: String,
    box_6: String,
    box_7: String,
    box_8: String,
    box_9: String
  },
  screen_1: String,
  screen_2: String
});

module.exports = Park = mongoose.model("park", parkSchema);
