import { Request, Response } from 'express';
import * as dashboardService from '../services/dashboardService';

export const getDashboardData = (req: Request, res: Response) => {
  const data = dashboardService.fetchDashboardData();
  res.send(data);
};

export const postDashboardData = (req: Request, res: Response) => {
  const newData = req.body;
  const data = dashboardService.createDashboardData(newData);
  res.send(data);
};

export const putDashboardData = (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const data = dashboardService.updateDashboardData(id, updatedData);
  res.send(data);
};

export const deleteDashboardData = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = dashboardService.deleteDashboardData(id);
  res.send(data);
};