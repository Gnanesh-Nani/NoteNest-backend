require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Controllers and routes
const authRoutes = require('./api/auth');
const noteRoutes = require('./api/notes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes

app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/notes', noteRoutes); // Notes routes

app.use('/', (req, res) => {
  res.send('Welcome to NoteNest API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
