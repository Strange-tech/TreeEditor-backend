const mongoose = require("mongoose");

const treeSchema = new mongoose.Schema({
  skeleton: {
    type: String,
    required: [true, "A tree must have a skeleton."],
  },
  matrix: [Number], // 4*4
  isInstanced: {
    type: Boolean,
    required: [true, "A tree must be either instanced or not."],
  },
  matrices: [[Number]], // array of matrix4
});

exports.hkust = mongoose.model("hkust", treeSchema);

// exports.cambridge2block = mongoose.model("Cambridge2block", treeSchema);
// exports.cambridge3block = mongoose.model("Cambridge3block", treeSchema);
// exports.cambridge4block = mongoose.model("Cambridge4block", treeSchema);
// exports.cambridge8block = mongoose.model("Cambridge8block", treeSchema);
// exports.cambridge9block = mongoose.model("Cambridge9block", treeSchema);
// exports.cambridge10block = mongoose.model("Cambridge10block", treeSchema);
// exports.cambridge14block = mongoose.model("Cambridge14block", treeSchema);
// exports.cambridge15block = mongoose.model("Cambridge15block", treeSchema);
// exports.cambridge16block = mongoose.model("Cambridge16block", treeSchema);
