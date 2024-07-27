from fastapi import APIRouter, HTTPException, Query
from typing import List
from app.services.company_service import get_paginated_companies, get_company_by_id
from app.models.company import Company, PaginatedCompanies

router = APIRouter()

# def read_companies():
#     companies = get_all_companies()
#     if not companies:
#         raise HTTPException(status_code=404, detail="No companies found")
#     return companies
@router.get("/", response_model=PaginatedCompanies)
def read_companies(skip: int = Query(0, alias="skip"), limit: int = Query(5, alias="limit")):
    companies, total = get_paginated_companies(skip, limit)
    if not companies:
        raise HTTPException(status_code=404, detail="No companies found")
    return {
        "companies": companies,
        "total": total,
        "skip": skip,
        "limit": limit
    }

@router.get("/{company_id}", response_model=Company)
def read_company(company_id: int):
    company = get_company_by_id(company_id)
    if not company:
        raise HTTPException(status_code=404, detail="Company not found")
    return company
