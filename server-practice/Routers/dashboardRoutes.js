const express = require('express');
const router = express.Router();

// GET route for fetching dashboard data
router.get('/', (req, res) => {
  res.send('Fetching dashboard data...');
});

// POST route for creating new dashboard data
router.post('/', (req, res) => {
  const newData = req.body;
  res.send(`Creating new dashboard data: ${JSON.stringify(newData)}`);
});

// PUT route for updating existing dashboard data
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  res.send(`Updating dashboard data with ID ${id}: ${JSON.stringify(updatedData)}`);
});

// DELETE route for deleting dashboard data
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Deleting dashboard data with ID ${id}`);
});

module.exports = router;