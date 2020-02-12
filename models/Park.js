const mongoose = require("mongoose");

const Schema = mongoose.Schema,
  ObjectId = mongoose.Schema.Types.ObjectId;

const parkSchema = new Schema({
  id: ObjectId,
  ledStrips: {
    strip_1: { type: String, required: true },
    strip_2: { type: String, required: true },
    strip_3: { type: String, required: true },
    strip_4: { type: String, required: true },
    strip_5: { type: String, required: true },
    strip_6: { type: String, required: true },
    strip_7: { type: String, required: true },
    strip_8: { type: String, required: true },
    strip_9: { type: String, required: true },
    strip_10: { type: String, required: true }
  },
  ledBoxes: {
    box_1: { type: String, required: true },
    box_2: { type: String, required: true },
    box_3: { type: String, required: true },
    box_4: { type: String, required: true },
    box_5: { type: String, required: true },
    box_6: { type: String, required: true },
    box_7: { type: String, required: true },
    box_8: { type: String, required: true },
    box_9: { type: String, required: true }
  },
  screens: {
    screen_1: { type: String, required: true },
    screen_2: { type: String, required: true }
  }
});

module.exports = Park = mongoose.model("park", parkSchema);
