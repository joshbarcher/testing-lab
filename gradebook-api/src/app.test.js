import { describe, it, expect, beforeEach } from 'vitest';
import request from 'supertest';
import { createApp } from './app.js';
import { createMemoryStore } from './store.js';

let app;

beforeEach(() => {
  app = createApp({ store: createMemoryStore() });
});

describe('GET /health', () => {
  it('answers 200 with status ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});
