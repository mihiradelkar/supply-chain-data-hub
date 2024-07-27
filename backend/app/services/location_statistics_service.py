from app.utils.csv_loader import load_csv
from app.core.config import settings
from app.helper.parser import parse_address
import logging

logger = logging.getLogger(__name__)

def load_locations():
    return load_csv(settings.LOCATIONS_CSV)

def get_top_states_with_most_jobs(top_n=10):
    try:
        df = load_locations()
        df['state'] = df['address'].apply(lambda x: parse_address(x)[1])
        top_states = df['state'].value_counts().head(top_n).to_dict()
        return top_states
    except Exception as e:
        logger.error(f"Error in get_top_states_with_most_jobs: {e}")
        return {}

def get_top_cities_with_most_jobs(top_n=10):
    try:
        df = load_locations()
        df['city'] = df['address'].apply(lambda x: parse_address(x)[0])
        top_cities = df['city'].value_counts().head(top_n).to_dict()
        return top_cities
    except Exception as e:
        logger.error(f"Error in get_top_cities_with_most_jobs: {e}")
        return {}
