const TreeFeatures = require("../models/treeFeaturesModel");
const Tree = require("../models/treeModel");
const catchAsync = require("../utils/catchAsync");

exports.createTreeFeatures = catchAsync(async (req, res, next) => {
  const newTreeFeatures = await TreeFeatures.create(req.body);
  res.status(201).json({
    status: "success",
    content: { newTreeFeatures },
  });
});

exports.getTreeFeatures = catchAsync(async (req, res, next) => {
  const tree = req.query.name;
  const treeFeatures = await TreeFeatures.findOne({ alias: tree });
  res.status(200).json({ status: "success", content: { treeFeatures } });
});

exports.createTree = catchAsync(async (req, res, next) => {
  const newTree = await Tree.hkust.create(req.body);
  res.status(201).json({
    status: "success",
    content: { newTree },
  });
});

exports.getAllTrees = catchAsync(async (req, res, next) => {
  const ret = await Tree.hkust.find();
  const trees = [];
  ret.forEach((el) => {
    trees.push({
      skeleton: JSON.parse(el.skeleton),
      matrix: el.matrix,
      isInstanced: el.isInstanced,
      matrices: el.matrices,
    });
  });
  res.status(200).json({
    status: "success",
    content: { trees },
  });
});
