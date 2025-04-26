const express = require('express');
const router = express.Router();
const { createNote, getNotes, completeNote, deleteNote,updateNote ,searchNotes } = require('../controllers/noteController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the authMiddleware

// Create a new note (Requires user authentication)
router.post('/', authMiddleware, createNote);

// Get all notes for the authenticated user (Requires user authentication)
router.get('/', authMiddleware, getNotes);

// Mark a note as completed (Requires user authentication)
router.put('/:noteId/complete', authMiddleware, completeNote);

// Delete a note (Requires user authentication)
router.delete('/:noteId', authMiddleware, deleteNote);
router.put('/:noteId', authMiddleware, updateNote);
router.get('/search', authMiddleware, searchNotes); // Search notes (Requires user authentication)


module.exports = router;
