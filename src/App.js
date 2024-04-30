import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LineChart from './components/googleLineChart'
import BarChart from './components/googleBarCharts'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Line Chart</Link>
            </li>
            <li>
              <Link to="/barChart">Bar Chart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/barChart"  element={<BarChart/>}>
          </Route>
          <Route path="/" element={<LineChart/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
