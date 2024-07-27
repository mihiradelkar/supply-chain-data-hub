import pandas as pd
import logging
from app.core.config import settings

logger = logging.getLogger(__name__)

def load_csv(file_path):
    """
    Load a CSV file and return a DataFrame. Log an error and return an empty DataFrame if there's an issue.
    """
    try:
        df = pd.read_csv(file_path)
        return df
    except Exception as e:
        logger.error(f"Error loading CSV file from {file_path}: {e}")
        return pd.DataFrame()
