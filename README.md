
# Glam Hub - Salon & Parlour Management Software

## Backend Platform Service

This project is a scalable backend system for managing salon operations including:

- Appointment Booking
- Service Execution
- Billing & Payments
- Inventory Management
- CRM & Loyalty
- Notifications

## Tech Stack

- Node.js
- Express.js
- MySQL
- JWT Authentication
- REST APIs
- GitHub

## Current Phase

Phase 2 - Core Service Development

## Features Under Development

- Booking Service APIs
- Slot Management Logic
- Authentication & Authorization
- API Security

## Project Structure

```text
src/
├── controllers/
├── services/
├── routes/
├── models/
├── middleware/
├── validations/
├── database/
└── app.js
```

## Implemented Features

- Create Appointment API
- Update Appointment API
- Cancel Appointment API
- Authentication Middleware
- Request Validation
- API Route Structure

## API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /api/appointments | Create appointment |
| PUT | /api/appointments/:id | Update appointment |
| DELETE | /api/appointments/:id | Cancel appointment |

## Authentication

Protected APIs require Authorization header.

Example:

```text
Authorization: testtoken
```

## Run Project

```bash
npm install
npm run dev
```
