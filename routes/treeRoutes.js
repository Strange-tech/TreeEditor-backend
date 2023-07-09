const express = require("express");
const treeController = require("../controllers/treeController");

const router = express.Router();

router
  .route("/features")
  .post(treeController.createTreeFeatures)
  .get(treeController.getTreeFeatures);

router
  .route("/")
  .post(treeController.createTree)
  .get(treeController.getAllTrees);

module.exports = router;
