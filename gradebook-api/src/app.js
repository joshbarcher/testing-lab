import express from 'express';
import { createMemoryStore } from './store.js';
import { average, isValidScore } from './scores.js';
import { letterGrade } from './letters.js';

export function createApp({ store = createMemoryStore() } = {}) {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.get('/api/students', async (req, res) => {
    res.json(await store.all());
  });

  app.post('/api/students', async (req, res) => {
    const name = req.body?.name;
    if (typeof name !== 'string' || name.trim() === '') {
      return res.status(400).json({ error: 'name is required' });
    }
    res.status(201).json(await store.add(name.trim()));
  });

  app.get('/api/students/:id', async (req, res) => {
    const student = await store.get(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'no such student' });
    }
    const hasScores = student.scores.length > 0;
    const avg = hasScores ? average(student.scores) : null;
    res.json({ ...student, average: avg, letter: hasScores ? letterGrade(avg) : null });
  });

  app.post('/api/students/:id/scores', async (req, res) => {
    const score = req.body?.score;
    if (!isValidScore(score)) {
      return res.status(400).json({ error: 'score must be a number from 0 to 100' });
    }
    const student = await store.addScore(req.params.id, score);
    if (!student) {
      return res.status(404).json({ error: 'no such student' });
    }
    res.status(201).json(student);
  });

  return app;
}
