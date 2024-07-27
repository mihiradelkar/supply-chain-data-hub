# Supply-Chain-Data-Hub-Backend

This repository contains the backend implementation of the Full-Stack Developer Take-Home Assessment.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Python 3.x
- pip (Python package installer)
- virtualenv
- Docker (optional, for containerized setup)

## Getting Started

Follow these steps to set up and run the backend application.

### 1. Update and Upgrade the System

```bash
sudo apt update
sudo apt upgrade
```

### 2. Install Python and pip

```bash
sudo apt install python3
sudo apt install python3-pip
```

### 3. Install virtualenv

```bash
Copy code
sudo pip3 install virtualenv
```

### 4. Set Up the Virtual Environment

Navigate to the project directory and set up a virtual environment:

```bash
# cd /to current project path
python3 -m venv venv
source venv/bin/activate
```

### 5. Install Required Python Packages

```bash
pip install -r requirements.txt
```

### 6. Run the FastAPI Application

```bash
uvicorn app.main:app --reload
```

The backend application will be available at http://localhost:8000.

### 7. Run Tests

```bash
pytest backend/app/tests
```

### Docker Setup (Optional)

If you prefer to run the backend application in a Docker container, follow these steps:

Build the Docker Image:

```bash
docker build -t fastapi-backend .
```

Run the Docker Container:

```bash
docker run -p 8000:80 fastapi-backend
```

The backend application will be available at http://localhost:8000.