import React from "react";
import "./Footer.css";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <LanguageSwitcher />
        <div>
          <p>
            &copy; {new Date().getFullYear()} Company Data Hub. All rights
            reserved.
          </p>
        </div>
        <div>
          {/* add link to API docs at http://localhost:8000/docs */}
          <a
            href="http://localhost:8000/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            API Documentation
          </a>
          {/* and github url https://github.com/mihiradelkar/supply-chain-data-hub */}
          <a
            href="https://github.com/mihiradelkar/supply-chain-data-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="external-link"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
