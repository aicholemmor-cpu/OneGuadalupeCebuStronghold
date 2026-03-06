const request = require('supertest');
const app = require('../src/index');

describe('Health endpoint', () => {
  it('responds with status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('Info endpoint', () => {
  it('returns governance text', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toBe(200);
    expect(res.body.governance).toMatch(/One Guadalupe Triskelion Cebu Stronghold/);
  });
});
