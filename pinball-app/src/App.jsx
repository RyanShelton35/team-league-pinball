import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import './assets/base.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import SiteNav from './components/common/SiteNav'
import SiteFooter from './components/common/SiteFooter'
import HomePage from './components/home/HomePage'
import MachinesPage from './components/machines/MachinesPage';
import TeamsPage from './components/teams/TeamsPage';
import LoginPage from './components/auth/LoginPage';
import LeagueRulesPage from './components/rules/LeagueRulesPage';
import MatchRulesPage from './components/rules/MatchRulesPage';

import AmplifyConfigure from './util/AmplifyConfigure';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function updateAuthStatus(authStatus) {
    setIsAuthenticated(authStatus)
  }

  return (
    <BrowserRouter>
    <Container fluid>
      <AmplifyConfigure />
      <SiteNav isAuthenticated={isAuthenticated} updateAuthStatus={updateAuthStatus} />
      <div id="content">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/machines" element={<MachinesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leaguerules" element={<LeagueRulesPage />} />
          <Route path="/matchrules" element={<MatchRulesPage />} />
        </Routes>
      </div>
      <SiteFooter />
    </Container>
    </BrowserRouter>
  );
}

export default App;
