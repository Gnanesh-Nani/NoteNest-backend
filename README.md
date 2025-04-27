# NoteNest-backend

---

### 📁 `server/README.md` (Backend Repo)

```markdown
# 🧠 NoteNest – Backend (Node.js + Express)

This is the backend for the **NoteNest**, handling authentication, note management, and OTP-based password recovery(still need to be added).

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- BcryptJS
- JSON Web Tokens (JWT)
- Nodemailer + RandomString (pending)
- CORS
- Dotenv

---

## 📦 API Routes

### 🔐 Auth
- `POST /signup` – Register a new user
- `POST /login` – Login and receive JWT
- `POST /forgot-password` – Send OTP (pending)
- `POST /verify-otp` – Verify OTP & reset password (pending)

### 📝 Notes (JWT Protected)
- `GET /notes` – Fetch all notes 
- `POST /notes` – Add a new note
- `PUT /notes/:id/complete` – Toggle note as completed
- `DELETE /notes/:id` – Permanently delete note

---

## 🛠️ Setup Instructions

```bash
# Navigate to server folder
cd server

# Install dependencies
npm install

# Start server
npm run dev
