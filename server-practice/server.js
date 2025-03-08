const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// GET route for fetching dashboard data
app.get('/dashboard', (req, res) => {
  res.send('Fetching dashboard data...');
});

// POST route for creating new dashboard data
app.post('/dashboard', (req, res) => {
  const newData = req.body;
  res.send(`Creating new dashboard data: ${JSON.stringify(newData)}`);
});

// PUT route for updating existing dashboard data
app.put('/dashboard/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  res.send(`Updating dashboard data with ID ${id}: ${JSON.stringify(updatedData)}`);
});

// DELETE route for deleting dashboard data
app.delete('/dashboard/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Deleting dashboard data with ID ${id}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});