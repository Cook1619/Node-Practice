import express from 'express';
import dashboardRoutes from './Routers/dashboardRoutes';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Use the dashboard routes
app.use('/dashboard', dashboardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});