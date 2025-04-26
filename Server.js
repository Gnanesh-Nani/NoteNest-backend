require('dotenv').config();
const express = require('express');
const cors=require('cors');
const connectDB = require('./config/db');

// Controllers and routes
const authRoutes = require('./api/auth');
const noteRoutes = require('./api/notes');

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));
// Enable CORS for all routes
// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes

app.use('/api/auth', authRoutes);  // Authentication routes
app.use('/api/notes', noteRoutes); // Notes routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
