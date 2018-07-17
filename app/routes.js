const express = require("express");
const router = express.Router();

const ExampleController = require("./src/modules/example/ExampleController")();

const ResponseMiddleware = require("./src/middleware/ResponseMiddleware");
const ErrorMiddleware = require("./src/middleware/ErrorMiddleware");

module.exports = function routes(app) {
  /*
   * API VERSION 1
   */
  router.use("/example", ExampleController);

  
  app.get("/api/v1", (req, res) =>
    res.status(200).send({ message: "API works." })
  );

router.use(ResponseMiddleware);
router.use(ErrorMiddleware);

  app.use(express.static("public"));
  app.use("/api/v1", router);
};
