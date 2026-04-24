# Annu Mathur - MERN Portfolio

A full-stack portfolio built with MongoDB, Express.js, React.js, and Node.js.

## Project Structure
```
portfolio/
├── backend/          # Express.js + MongoDB API
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   ├── server.js
│   └── .env.example
└── frontend/         # React.js frontend
    ├── src/
    │   ├── components/
    │   └── App.js
    └── public/
```

## Setup Instructions

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and email credentials
npm run dev   # development
npm start     # production
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start     # development (runs on port 3000)
npm run build # production build
```

### 3. Environment Variables (backend/.env)
```
PORT=5000
MONGO_URI=mongodb+srv://<user>:<pass>@cluster.mongodb.net/portfolio
EMAIL_USER=annumathur003@gmail.com
EMAIL_PASS=your_gmail_app_password
```

### 4. MongoDB Atlas Setup
1. Create a free cluster at mongodb.com/atlas
2. Create a database user
3. Whitelist your IP (or 0.0.0.0/0 for all)
4. Copy the connection string to MONGO_URI

**Note:** The app works without MongoDB too — it serves fallback data for projects, skills, and achievements. Contact form messages are only saved to DB when connected.

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/projects | Get all projects |
| POST | /api/projects | Add a project |
| GET | /api/skills | Get all skills |
| POST | /api/contact | Submit contact form |

## Customize for yourself
- Update personal info in each component file
- Replace resume link in `Navbar.js`
- Update social links in `Hero.js`, `Footer.js`
- Add/edit projects in `backend/routes/projects.js` (fallback data)

## Tech Stack
- **Frontend:** React.js, CSS3, FontAwesome, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Fonts:** Syne + Fira Code (Google Fonts)
