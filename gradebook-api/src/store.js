import { randomUUID } from 'node:crypto';

export function createMemoryStore() {
  const students = [];

  return {
    async all() {
      return students;
    },
    async add(name) {
      const student = { id: randomUUID(), name, scores: [] };
      students.push(student);
      return student;
    },
    async get(id) {
      return students.find((student) => student.id === id);
    },
    async addScore(id, score) {
      const student = students.find((s) => s.id === id);
      if (student) {
        student.scores.push(score);
      }
      return student;
    }
  };
}
