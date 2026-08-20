# Annu Mathur — Portfolio

MERN stack portfolio site with a React frontend and an Express/MongoDB API.

## Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React (Vite)           |
| Backend    | Node.js, Express       |
| Database   | MongoDB (Mongoose)     |
| Email      | Nodemailer             |

## Project Structure

```
├── server/
│   ├── config/       DB connection
│   ├── models/        Mongoose schemas
│   ├── routes/         API routes
│   └── seed/            Seed script
└── client/
    ├── src/
    │   ├── components/  React components
    │   └── api.js         API client
    └── public/
```

## Prerequisites

- Node.js 18+
- A MongoDB Atlas cluster (free tier is sufficient)

## Setup

### 1. Database

Create a free M0 cluster on MongoDB Atlas, add a database user, allow network
access, and copy the connection string from **Database → Connect → Drivers**.

### 2. Backend

```bash
cd server
cp .env.example .env
npm install
npm run seed
npm run dev
```

Runs on `http://localhost:5000`.

### 3. Frontend

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Runs on `http://localhost:5173`.

## Environment Variables

**server/.env**

| Variable             | Description                          |
|----------------------|---------------------------------------|
| `MONGO_URI`          | MongoDB connection string            |
| `PORT`               | API port (default 5000)              |
| `CLIENT_ORIGIN`      | Allowed CORS origin(s)               |
| `GMAIL_USER`         | Gmail address for contact form email |
| `GMAIL_APP_PASSWORD` | Gmail app password                   |

**client/.env**

| Variable        | Description             |
|-----------------|--------------------------|
| `VITE_API_URL`  | Backend API base URL    |

## Deployment

| Service   | Platform |
|-----------|----------|
| Database  | MongoDB Atlas |
| Backend   | Render (Web Service) |
| Frontend  | Render (Static Site) |

