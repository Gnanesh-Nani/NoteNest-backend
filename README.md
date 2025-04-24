# NoteNest-backend

---

### 📁 `server/README.md` (Backend Repo)

```markdown
# 🧠 Notes Web App – Backend (Node.js + Express)

This is the backend for the **Notes Web App**, handling authentication, note management, and OTP-based password recovery.

---

## 🧰 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- BcryptJS
- JSON Web Tokens (JWT)
- Nodemailer + RandomString
- CORS
- Dotenv

---

## 📦 API Routes

### 🔐 Auth
- `POST /signup` – Register a new user
- `POST /signin` – Login and receive JWT
- `POST /forgot-password` – Send OTP
- `POST /verify-otp` – Verify OTP & reset password

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
