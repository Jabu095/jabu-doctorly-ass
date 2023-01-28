import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Containers

// Pages
const Home = React.lazy(() => import('../src/pages/home/home.page'));

const Routers = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
