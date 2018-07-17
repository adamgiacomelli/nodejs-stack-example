const express = require("express");
const ExampleProvider = require("./ExampleProvider");

const router = express.Router();

module.exports = function vendorController() {
  router.get("/", ExampleProvider.getRoot);
  router.get("/error", ExampleProvider.getError);

  return router;
};
