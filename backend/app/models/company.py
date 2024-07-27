from pydantic import BaseModel
from typing import List
class Company(BaseModel):
    company_id: int
    name: str
    address: str
    latitude: float
    longitude: float

class PaginatedCompanies(BaseModel):
    companies: List[Company]
    total: int
    skip: int
    limit: int