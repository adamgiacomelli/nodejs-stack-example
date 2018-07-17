const express = require("express");
const ExampleProvider = require("./ExampleProvider");

const router = express.Router();

module.exports = function vendorController() {
  router.get("/", ExampleProvider.getRoot);

  return router;
};
