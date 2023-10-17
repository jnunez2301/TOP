const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Simple Schema
const SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date
})

//Schema with validations
const breakfastSchema = new Schema({
    eggs: {
      type: Number,
      min: [6, "Too few eggs"],
      max: 12,
      required: [true, "Why no eggs?"],
    },
    drink: {
      type: String,
      enum: ["Coffee", "Tea", "Water"],
    },
  });

const SomeModel = mongoose.model("SomeModel", SomeModelSchema)