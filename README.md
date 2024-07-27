# Supply Chain Data Hub

This project consists of a frontend and backend application for managing and visualizing supply chain data. The frontend is built with React, and the backend is built with FastAPI. The entire application is containerized using Docker and Docker Compose.

## Features

1. **Company Management**:
   - View a list of all companies.
   - Search for companies by name.
   - View detailed information about a specific company, including multiple locations.

2. **Location Management**:
   - View all locations associated with a specific company.
   - Display location details, including address, latitude, and longitude.

3. **Data Visualization**:
   - Interactive map integration using Leaflet to display company and location data.
   - Heatmap visualization to show areas with the highest concentration of company locations.
   - Bar charts and scatter plots for data analysis.

4. **Internationalization (i18n)**:
   - Multi-language support with English, Spanish, and Mandarin.
   - Easily switch between languages using a language selector.

5. **State Management**:
   - Manage application state using Redux for consistent and predictable state updates.
   - Persist application state using Redux Persist.

6. **Error Handling and Logging**:
   - Robust error handling throughout the application to ensure smooth user experience.
   - Comprehensive logging to capture and debug issues effectively.

7. **Swagger UI**:
   - Implemented Swagger UI for API documentation and testing.

8. **Responsive Design**:
   - Vanila CSS
   - Responsive UI design to provide a seamless experience across different devices and screen sizes.

9. **Testing**:
   - Unit tests for backend and frontend components to ensure code quality and reliability.
   - Automated test execution using GitHub Actions on pull requests.

10. **Docker and Docker Compose**:
   - Containerized deployment using Docker for consistent and reproducible environments.
   - Docker Compose configuration to easily set up and run the entire application stack.

11. **GitHub Actions for PR and build Workflow**:
   - PR check before merging into main
   - Builder workflow

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

### 6. Health check url

Health check : http://0.0.0.0:8000/

### 7. Swagger UI

Open this for swagger ui: http://0.0.0.0:8000/docs
