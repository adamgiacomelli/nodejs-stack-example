const test = require('ava');
const request = require('supertest');
const app = require('../../../../../server.js');

const PREFIX = '/api/v1';

test.serial('get /example/', async (t) => {
  t.plan(1);

  const res = await request(app).get(`${PREFIX}/example`);

  t.is(res.status, 200);
});

test.serial('get /example/error', async (t) => {
  t.plan(1);

  const res = await request(app).get(`${PREFIX}/example/error`);

  t.is(res.status, 500);
});

test.serial('get /example/missing', async (t) => {
  t.plan(1);

  const res = await request(app).get(`${PREFIX}/example/missing`);

  t.is(res.status, 404);
});
