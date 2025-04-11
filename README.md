# SaaS Usage Analytics Dashboard

A full-stack, production-ready analytics dashboard for SaaS platforms that tracks user behavior, feature adoption, engagement metrics, and tenant-specific activity in real-time.

---

## 🌐 Tech Stack

- **Frontend:** React, Chart.js, Axios
- **Backend:** Node.js, Express.js, MongoDB
- **Auth:** JWT, RBAC (Role-Based Access Control)
- **DevOps:** Docker, Docker Compose, AWS EC2 (deployable)
- **Other:** Express Rate Limit, Winston Logger, Joi Validation

---

## 📊 Key Features

- Real-time usage tracking and analytics
- Multi-tenant architecture with isolated data
- Role-based access and permission control
- JWT authentication with secure session management
- Custom dashboards per user/tenant
- Audit logs, feature toggles, and feedback capture
- Settings management and environment configuration

---

## 🧭 Project Structure

saas-analytics-dashboard/
├── backend/             # Express backend with API, services, models
├── frontend/            # React frontend with components and pages
├── docker/              # Dockerfiles and docker-compose setup
├── .env                 # Environment configuration
└── README.md

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ v18
- [Docker](https://www.docker.com/) & Docker Compose
- [MongoDB](https://www.mongodb.com/) (local or cloud)

### Environment Setup

1. Copy `.env.example` to `.env` and configure values:
   ```bash
   cp .env.example .env


Start services with Docker Compose:
   docker-compose up --build


Frontend
cd frontend
npm install
npm start

Backend
cd backend
npm install
npm run dev  # or npm start


This project is licensed under the MIT License.
