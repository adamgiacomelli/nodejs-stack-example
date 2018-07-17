const test = require("ava");
const request = require("supertest");
const app = require("../../server.js");

test.serial("get /api", async t => {
  t.plan(1);

  const res = await request(app).get("/api/v1");

  t.is(res.status, 200);
});

test.serial("get /example/", async t => {
  t.plan(1);

  const res = await request(app).get("/api/v1/example");

  t.is(res.status, 200);
});

test.serial("get /example/error", async t => {
  t.plan(1);

  const res = await request(app).get("/api/v1/example/error");

  t.is(res.status, 500);
});

test.serial("get /example/missing", async t => {
  t.plan(1);

  const res = await request(app).get("/api/v1/example/missing");

  t.is(res.status, 404);
});
