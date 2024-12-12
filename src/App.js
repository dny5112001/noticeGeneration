import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Placements from "./Components/Placements";
import Internship from "./Components/Internship";
import Pli from "./Components/Pli";
import InfrastuctureBooking from "./Components/InfrastuctureBooking";
import DutyChart from "./Components/DutyChart";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li>
              <Link to="/template1">Template 1</Link>
            </li>
            <li>
              <Link to="/template2">Template 2</Link>
            </li>
            <li>
              <Link to="/template3">Template 3</Link>
            </li>
            <li>
              <Link to="/template4">Template 4</Link>
            </li>
            <li>
              <Link to="/template5">Template 5</Link>
            </li>
          </ul>
        </nav>

        {/* Routes for each template */}
        <Routes>
          <Route path="/template1" element={<Placements />} />
          <Route path="/template2" element={<Internship />} />
          <Route path="/template3" element={<Pli />} />
          <Route path="/template4" element={<InfrastuctureBooking />} />
          <Route path="/template5" element={<DutyChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
