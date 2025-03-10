import React from "react";
import { Link } from "react-router-dom";
import "./CompanyItem.css";

const CompanyItem = ({ company }) => {
  return (
    <div className="company-item floating-box">
      <h2>{company.name}</h2>
      <p>{company.address}</p>
      <Link to={`/company/${company.company_id}`}>View Details</Link>
    </div>
  );
};

export default CompanyItem;
