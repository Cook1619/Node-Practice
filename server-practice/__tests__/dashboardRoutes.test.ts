const request = require('supertest');
const express = require('express');
const dashboardRoutes = require('../Routers/dashboardRoutes');

const app = express();
app.use(express.json());
app.use('/dashboard', dashboardRoutes);

describe('Dashboard Routes', () => {
  it('should fetch dashboard data', async () => {
    const res = await request(app).get('/dashboard');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Fetching dashboard data...');
  });

  it('should create new dashboard data', async () => {
    const newData = { name: 'Test Dashboard' };
    const res = await request(app).post('/dashboard').send(newData);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(`Creating new dashboard data: ${JSON.stringify(newData)}`);
  });

  it('should update existing dashboard data', async () => {
    const updatedData = { name: 'Updated Dashboard' };
    const res = await request(app).put('/dashboard/1').send(updatedData);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe(`Updating dashboard data with ID 1: ${JSON.stringify(updatedData)}`);
  });

  it('should delete dashboard data', async () => {
    const res = await request(app).delete('/dashboard/1');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Deleting dashboard data with ID 1');
  });
});