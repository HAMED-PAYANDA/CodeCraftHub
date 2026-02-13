# CodeCraftHub


## Overview

**CodeCraftHub** is a personalized learning platform for developers, built using  
**Node.js**, **MongoDB**, **Docker**, and **Generative AI**.

The platform is designed to deliver adaptive learning experiences by managing users,
enabling secure authentication, and providing a scalable server-side architecture
that can be extended with AI-driven recommendations and learning analytics.

This repository focuses on the **User Management Service**, a core backend
microservice responsible for user registration, authentication, authorization,
and secure data handling.

---

## Key Features

- User registration and login
- Secure password hashing using **bcrypt**
- **JWT-based authentication**
- MongoDB integration using **Mongoose**
- Modular and scalable backend architecture
- Centralized logging and error handling
- Environment-based configuration using `.env`
- Fully containerized deployment with **Docker & Docker Compose**

---

## Technology Stack

- **Node.js** – Backend runtime
- **Express.js** – REST API framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB ODM
- **JWT (jsonwebtoken)** – Authentication tokens
- **bcrypt** – Password hashing
- **Winston** – Application logging
- **Jest & Supertest** – Automated testing
- **Docker & Docker Compose** – Containerized deployment

---

## Final Project Structure

```text
project-root/
├── docker-compose.yml          # Docker Compose orchestration (Node.js + MongoDB)
├── user-management-service/
│   ├── src/
│   │   ├── config/             # Database, server, and environment configuration
│   │   ├── controllers/        # Request-handling logic
│   │   ├── middlewares/        # Authentication middleware
│   │   ├── models/             # MongoDB schemas
│   │   ├── routes/             # API route definitions
│   │   ├── services/           # Business logic layer
│   │   ├── utils/              # Logging and error handling utilities
│   │   └── app.js              # Application entry point
│   ├── tests/                  # Automated unit and API tests
│   ├── Dockerfile              # Docker image definition for Node.js service
│   ├── .env                    # Environment variables (not committed)
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── README.md               # Project documentation

Security Considerations
	•	Passwords are hashed before storage
	•	JWT tokens are used for secure authentication
	•	Environment variables protect sensitive configuration
	•	Centralized error handling prevents sensitive data exposure

⸻

Future Enhancements
	•	Role-based authorization
	•	AI-powered personalized learning recommendations
	•	Additional microservices (courses, exercises, analytics)
	•	Cloud deployment (Kubernetes / managed databases)

⸻

License

This project is licensed under the MIT License.

⸻

Author

Developed as part of an IBM Skills Network / Generative AI Final Project.
