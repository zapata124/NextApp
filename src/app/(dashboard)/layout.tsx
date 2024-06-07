import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={{ width: '40px', height: '40px', background: 'blue' }}>
      <h1>Dashboard</h1>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
