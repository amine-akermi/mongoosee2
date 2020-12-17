const mongoose = require("mongoose");
const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: [String],
  },
});
module.exports = mongoose.model("persons", personSchema);
