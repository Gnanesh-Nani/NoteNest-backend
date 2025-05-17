
# 🧠 NoteNest – Backend (Node.js + Express)

NoteNest is a simple and secure note management tool backend built with Node.js, Express, and MongoDB.
It handles user authentication, note creation, editing, and deletion, all secured with JWT tokens.
OTP-based password recovery support is planned for future updates.
Designed for reliability, scalability, and ease of use.
---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** + **Mongoose**
- **BcryptJS**
- **JSON Web Tokens (JWT)**
- **Nodemailer** + **RandomString** (pending)
- **CORS**
- **Dotenv**

---

## 📦 API Routes

### 🔐 Authentication
- `POST /signup` — Register a new user
- `POST /login` — Login and receive a JWT token
- `POST /forgot-password` — Send OTP (pending)
- `POST /verify-otp` — Verify OTP & reset password (pending)

### 📝 Notes (Protected with JWT)
- `GET /notes` — Fetch all notes
- `POST /notes` — Add a new note
- `PUT /notes/:id/complete` — Toggle a note as completed
- `DELETE /notes/:id` — Permanently delete a note

---

## 🛠️ Setup Instructions

```bash
# Navigate to the server folder
cd server

# Install all dependencies
npm install

# Start the development server
npm run dev
```
