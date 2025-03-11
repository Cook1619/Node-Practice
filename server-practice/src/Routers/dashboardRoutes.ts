import express from 'express';
import * as dashboardController from '../Controllers/dashboardController';

const router = express.Router();

// GET route for fetching dashboard data
router.get('/', dashboardController.getDashboardData);

// POST route for creating new dashboard data
router.post('/', dashboardController.postDashboardData);

// PUT route for updating existing dashboard data
router.put('/:id', dashboardController.putDashboardData);

// DELETE route for deleting dashboard data
router.delete('/:id', dashboardController.deleteDashboardData);

export default router;