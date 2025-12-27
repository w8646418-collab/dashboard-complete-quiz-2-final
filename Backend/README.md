# Backend (Ready)

This package is a ready-to-run Node.js + Express backend for user registration and login using MongoDB (Mongoose).

## Setup
1. Copy `.env.example` to `.env` and update values if needed.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server (development):
   ```bash
   npm run dev
   ```
   or production:
   ```bash
   npm start
   ```
4. Endpoints:
   - `POST /api/register`  -> body: `{ "email": "...", "password": "..." }`
   - `POST /api/login`     -> body: `{ "email": "...", "password": "..." }`

## Notes
- Passwords are hashed with bcrypt before saving.
- Login returns a JWT token (valid for 7 days). You can store it on the client and send it as `Authorization: Bearer <token>`.
- Default MongoDB URL is `mongodb://127.0.0.1:27017/socialmediaDB`.
