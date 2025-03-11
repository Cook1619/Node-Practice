export const fetchDashboardData = () => {
  return 'Fetching dashboard data...';
};

export const createDashboardData = (newData: any) => {
  return `Creating new dashboard data: ${JSON.stringify(newData)}`;
};

export const updateDashboardData = (id: string, updatedData: any) => {
  return `Updating dashboard data with ID ${id}: ${JSON.stringify(updatedData)}`;
};

export const deleteDashboardData = (id: string) => {
  return `Deleting dashboard data with ID ${id}`;
};