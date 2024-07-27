import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCompaniesThunk,
  setSearch,
  // setPage,
  setItemsPerPage,
} from "../../store/companySlice";
import CompanyItem from "../../components/CompanyItem/CompanyItem";
import Pagination from "../../components/Pagination/Pagination";
import { useTranslation } from "react-i18next";
import "./CompanyListPage.css";

const CompanyListPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    companies,
    search,
    status,
    error,
    currentPage,
    itemsPerPage,
    totalItems,
  } = useSelector((state) => state.companies);

  useEffect(() => {
    console.log("currentPage", currentPage);
    dispatch(fetchCompaniesThunk({ page: currentPage, limit: itemsPerPage }));
  }, [dispatch, currentPage, itemsPerPage]);

  useEffect(() => {
    console.log("Companies state:", companies); // Log companies state
  }, [companies]);

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleItemsPerPageChange = (e) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
  };

  const filteredCompanies = Array.isArray(companies)
    ? companies.filter((company) =>
        company.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div>
      <div className="center-container">
        <h1>{t("findYourCompany")}</h1>
      </div>
      <div className="center-container">
        <input
          type="text"
          className="input-search floating-box"
          placeholder={t("searchCompanies")}
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className="center-container">
        <label htmlFor="itemsPerPage">{t("itemsPerPage")}:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={9}>9</option>
          <option value={20}>20</option>
        </select>
      </div>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="error">{error}</p>}
      {status === "succeeded" && (
        <>
          <div className="company-list">
            {filteredCompanies.map((company) => (
              <CompanyItem key={company.company_id} company={company} />
            ))}
          </div>
          <Pagination
            totalItems={totalItems}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
        </>
      )}
    </div>
  );
};

export default CompanyListPage;
