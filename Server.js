require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
// Controllers and routes
const authRoutes = require('./api/auth');
const noteRoutes = require('./api/notes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use(cors({
  origin: process.env.CROSS_ORIGIN || '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'],
  credentials: true,
}));

// Connect to MongoDB
connectDB();

// Routes

app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/notes', noteRoutes); // Notes routes

app.get('/', (req, res) => {
  res.send('Welcome to NoteNest API!');
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
}
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
