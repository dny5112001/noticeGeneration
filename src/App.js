import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Placements from "./Components/Placements";
import Internship from "./Components/Internship";
import Pli from "./Components/Pli";
import DutyChart from "./Components/DutyChart";
import PlacementsTable from "./Components/PlacementsTable";
import InternshipTable from "./Components/InternshipTable";
import PliTable from "./Components/PliTable";
import InfrastructureBooking from "./Components/InfrastuctureBooking";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/placements">Placements</Link>
            </li>
            <li>
              <Link to="/placements-table">Placements Table</Link>
            </li>
            <li>
              <Link to="/internship">Internship</Link>
            </li>
            <li>
              <Link to="/internship-table">Internship Table</Link>
            </li>
            <li>
              <Link to="/pli">Pli</Link>
            </li>
            <li>
              <Link to="/pli-table">Pli Table</Link>
            </li>
            <li>
              <Link to="/infrastructure-booking">Infrastructure Booking</Link>
            </li>
            <li>
              <Link to="/duty-chart">Duty Chart</Link>
            </li>
          </ul>
        </nav>

        {/* Routes for each component */}
        <Routes>
          <Route path="/placements" element={<Placements />} />
          <Route path="/placements-table" element={<PlacementsTable />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship-table" element={<InternshipTable />} />
          <Route path="/pli" element={<Pli />} />
          <Route path="/pli-table" element={<PliTable />} />
          <Route
            path="/infrastructure-booking"
            element={<InfrastructureBooking />}
          />
          <Route path="/duty-chart" element={<DutyChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
