# Annu Mathur — Portfolio (MERN Stack)

A real MERN app: React frontend, Express + MongoDB backend, and a working
contact form that saves messages to your database and emails you. Same
look and feel as the static version, now genuinely full-stack.

```
mern-portfolio/
├── server/    Express API + MongoDB (Mongoose)
└── client/    React app (Vite)
```

## 1. MongoDB Atlas (free tier is enough)

1. Go to mongodb.com/cloud/atlas → create a free (M0) cluster.
2. Database Access → add a user with a password.
3. Network Access → allow access from anywhere (0.0.0.0/0) for now.
4. Database → Connect → Drivers → copy the connection string.

## 2. Backend setup

```bash
cd server
cp .env.example .env
# paste your MongoDB connection string into MONGO_URI in .env
npm install
npm run seed     # loads your real projects/skills/achievements/experience into MongoDB
npm run dev       # starts the API on http://localhost:5000
```

### Contact form emails (optional but recommended)
1. Turn on 2-Step Verification on your Google account.
2. Google Account → Security → App Passwords → generate one for "Mail".
3. Put your Gmail address and that 16-character app password into
   `GMAIL_USER` / `GMAIL_APP_PASSWORD` in `server/.env`.
4. Restart the server. Every contact-form submission now emails you AND
   is saved permanently in MongoDB (so nothing is lost even if email fails).

## 3. Frontend setup

```bash
cd client
cp .env.example .env
# VITE_API_URL should point at your running server, e.g. http://localhost:5000/api
npm install
npm run dev        # opens http://localhost:5173
```

### Adding your photo
Right now the hero and footer show an "AM" monogram as a placeholder.
To use a real photo:
1. Drop your photo into `client/public/` as `profile.jpg`.
2. In `client/src/components/Hero.jsx`, find the `<span className="portrait-monogram">AM</span>`
   line inside `.portrait-img` and replace it with:
   `<img src="/profile.jpg" alt="Annu Mathur" />`
3. Do the same in `client/src/components/Footer.jsx` for `.footer-photo .inner`.
4. The oval/blob shape is applied automatically by CSS (`.portrait-img`,
   `object-fit: cover`) — just make sure the photo is reasonably square
   so it crops nicely.

## 4. Deploying it for real

- **Database**: already live on MongoDB Atlas, nothing more to do.
- **Backend**: push the `server/` folder to GitHub, deploy on Render
  (or Railway/Fly.io) as a Node web service. Add the same environment
  variables from `.env` in the host's dashboard. Note the live URL,
  e.g. `https://annu-portfolio-api.onrender.com`.
- **Frontend**: push `client/` to GitHub, deploy on Vercel or Netlify.
  Set `VITE_API_URL` to `https://annu-portfolio-api.onrender.com/api`
  in the host's environment variables.
- Back in the backend's env vars, set `CLIENT_ORIGIN` to your deployed
  frontend URL so CORS allows it.

## Editing your content later
You never have to touch the React code to update a project, skill, or
achievement. Either:
- Edit `server/seed/seed.js` and re-run `npm run seed`, or
- Connect to MongoDB Atlas directly (or via MongoDB Compass) and edit
  documents in the `projects`, `skills`, `achievements`, `experiences`
  collections.
