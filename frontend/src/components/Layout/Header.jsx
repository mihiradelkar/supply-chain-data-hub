import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Company Data Hub</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/companies-heat-map">Heatmap</Link>
            </li>
            <li>
              <Link to="/job-statistics">Statistics</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
