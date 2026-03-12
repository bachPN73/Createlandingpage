import { createBrowserRouter, redirect } from 'react-router';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { Library } from './pages/Library';
import { FindWithAI } from './pages/FindWithAI';
import { Profile } from './pages/Profile';
import { Pricing } from './pages/Pricing';
import { Guide } from './pages/Guide';
import { Landing } from './pages/Landing';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing
  },
  {
    path: '/dang-nhap',
    Component: Login
  },
  {
    path: '/dang-ky',
    Component: Register
  },
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        Component: Dashboard
      },
      {
        path: 'thu-vien',
        Component: Library
      },
      {
        path: 'find-with-ai',
        Component: FindWithAI
      },
      {
        path: 'tai-khoan',
        Component: Profile
      },
      {
        path: 'goi-dich-vu',
        Component: Pricing
      },
      {
        path: 'huong-dan',
        Component: Guide
      }
    ]
  }
]);