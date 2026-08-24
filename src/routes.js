'use strict';

const express = require('express');
const _ = require('lodash');

const router = express.Router();

const mockUsers = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'viewer' },
  { id: 3, name: 'Carol', role: 'editor' }
];

const mockItems = new Map([
  [1, { id: 1, name: 'item-one', price: 9.99 }],
  [2, { id: 2, name: 'item-two', price: 19.99 }]
]);

router.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'aikido-vrp-lab', time: Date.now() });
});

router.get('/api/users', (req, res) => {
  const limit = parseInt(req.query.limit, 10) || mockUsers.length;
  res.json(_.take(mockUsers, limit));
});

router.get('/api/users/:id', (req, res) => {
  const user = _.find(mockUsers, { id: parseInt(req.params.id, 10) });
  if (!user) {
    return res.status(404).json({ error: 'user not found' });
  }
  res.json(user);
});

router.get('/api/items/:id', (req, res) => {
  const item = mockItems.get(parseInt(req.params.id, 10));
  if (!item) {
    return res.status(404).json({ error: 'item not found' });
  }
  res.json(item);
});

router.post('/api/items', (req, res) => {
  const { name, price } = req.body || {};
  if (!name || typeof price !== 'number') {
    return res.status(400).json({ error: 'name and numeric price required' });
  }
  const nextId = Math.max(...mockItems.keys()) + 1;
  const item = { id: nextId, name, price };
  mockItems.set(nextId, item);
  res.status(201).json(item);
});

module.exports = router;
