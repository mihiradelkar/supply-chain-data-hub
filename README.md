# Supply Chain Data Hub

This project consists of a frontend and backend application for managing and visualizing supply chain data. The frontend is built with React, and the backend is built with FastAPI. The entire application is containerized using Docker and Docker Compose.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/supply-chain-data-hub.git
cd supply-chain-data-hub
```

### 2. Clone the Repository

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 3. Add .env

```bash
echo "REACT_APP_API_URL=http://localhost:8000/api" > frontend/.env
```

### 4. Build the Docker Images

Navigate to the root directory of the project and build the Docker images:

```bash
sudo docker-compose build
```

### 5. Run the Docker Containers

Run the Docker containers using Docker Compose:

```bash
sudo docker-compose up
```
