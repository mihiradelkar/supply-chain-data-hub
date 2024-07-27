from app.helper.csv_loader import load_csv
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

def load_locations():
    return load_csv(settings.LOCATIONS_CSV)

def get_locations_by_company_id(company_id: int):
    try:
        df = load_locations()
        locations = df[df['company_id'] == company_id]
        if locations.empty:
            logger.warning(f"No locations found for company ID {company_id}")
            return []
        return locations.to_dict(orient='records')
    except Exception as e:
        logger.error(f"Error in get_locations_by_company_id: {e}")
        return []

def get_all_locations():
    try:
        df = load_locations()
        return df.to_dict(orient='records')
    except Exception as e:
        logger.error(f"Error in get_all_locations: {e}")
        return []
