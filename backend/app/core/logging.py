import logging

def setup_logging():
    logging.basicConfig(level=logging.INFO)
    logging.getLogger("uvicorn").setLevel(logging.INFO)
