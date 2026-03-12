import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-[240px]">
        <Outlet />
      </div>
    </div>
  );
}
