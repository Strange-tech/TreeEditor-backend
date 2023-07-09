const mongoose = require("mongoose");
const { pinyin } = require("pinyin-pro");

const treeFeaturesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tree must have a name."],
    unique: true,
    trim: true,
    minLength: [2, "A tree's name must have gte 2 characters."],
    maxLength: [50, "A tree's name must have lte 50 characters."],
  },
  alias: String,
  path: {
    type: String,
    required: [true, "A tree must have a texture path."],
  },
  features: {
    type: String,
    required: [true, "A tree must have a feature."],
  },
});

treeFeaturesSchema.pre("save", function (next) {
  this.alias = pinyin(this.name, { toneType: "none" }).replace(/\s*/g, "");
  next();
});

const TreeFeatures = mongoose.model("TreeFeatures", treeFeaturesSchema);

module.exports = TreeFeatures;
