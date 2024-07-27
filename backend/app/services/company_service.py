from app.helper.csv_loader import load_csv
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

def load_companies():
    return load_csv(settings.COMPANIES_CSV)

def get_all_companies():
    try:
        df = load_companies()
        return df.to_dict(orient='records')
    except Exception as e:
        logger.error(f"Error in get_all_companies: {e}")
        return []

def get_company_by_id(company_id: int):
    try:
        df = load_companies()
        company = df[df['company_id'] == company_id]
        if company.empty:
            logger.warning(f"Company with ID {company_id} not found.")
            return None
        return company.to_dict(orient='records')[0]
    except Exception as e:
        logger.error(f"Error in get_company_by_id: {e}")
        return None
