'use strict';

const request = require('supertest');
const app = require('../src/server');

describe('smoke tests', () => {
  it('health endpoint responds ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  it('lists users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).toBe(200);
    expect(res.body.length).toBe(3);
  });

  it('returns 404 for unknown user', async () => {
    const res = await request(app).get('/api/users/999');
    expect(res.status).toBe(404);
  });
});
