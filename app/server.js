const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

const port = process.env.PORT || 3000;

const app = express();

global.__root = path.join(__dirname, "/");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes")(app);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`Express server listening on port: ${port}`)
);
