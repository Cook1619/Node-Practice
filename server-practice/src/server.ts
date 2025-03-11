import express from 'express';
import dashboardRoutes from './routers/dashboardRoutes';
import { authenticateJWT } from './middleware/auth';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Apply JWT middleware to dashboard routes
app.use('/dashboard', authenticateJWT, dashboardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});