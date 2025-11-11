import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SiteNav from './components/common/SiteNav'
import SiteFooter from './components/common/SiteFooter'
import HomePage from './components/home/HomePage'
import MachinesPage from './components/machines/MachinesPage';
import TeamsPage from './components/teams/TeamsPage';
import LoginPage from './components/auth/LoginPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus)
  }

  const router = createBrowserRouter([

    {path: "/", element: <HomePage />},
    {path: "/teams", element: <TeamsPage />},
    {path: "/machines", element: <MachinesPage />},
    {path: "/login", element: <LoginPage />},
  ])

  return (
    <div>
      <SiteNav isAuthenticated={isAuthenticated} updateAuthStatus={updateAuthStatus} />

      <RouterProvider router={router} />
      <SiteFooter />
    </div>
  );
}

export default App;
