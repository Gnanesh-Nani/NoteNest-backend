const Note = require('../models/Note');

// Create a new note
const createNote = async (req, res) => {
  const { title, content, dueDate } = req.body;
  const userId = req.userId; // The user ID is extracted from JWT middleware

  try {
    // Create a new note with the userId
    const newNote = new Note({
      title,
      content,
      dueDate,
      user: userId
    });

    // Save the note to the database
    await newNote.save();
    res.status(201).json({ message: 'Note created successfully', note: newNote });
  } catch (error) {
    console.error(error); // For debugging purposes
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get notes for a specific user
const getNotes = async (req, res) => {
  const userId = req.userId; // The user ID is extracted from JWT middleware

  try {
    // Find all notes that belong to the current user
    const notes = await Note.find({ user: userId });

    // If no notes are found, return a 404 status
    if (!notes || notes.length === 0) {
      return res.status(404).json({ message: 'No notes found for this user' });
    }

    // Return the notes found for the user
    res.status(200).json(notes);
  } catch (error) {
    console.error(error); // For debugging purposes
    res.status(500).json({ message: 'Error fetching notes', error });
  }
};

// Mark a note as completed
const completeNote = async (req, res) => {
  const { noteId } = req.params;

  try {
    // Find the note by its ID
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Mark the note as completed
    note.completed = true;
    await note.save();
    res.status(200).json({ message: 'Note marked as completed' });
  } catch (error) {
    console.error(error); // For debugging purposes
    res.status(500).json({ message: 'Error completing note', error });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  const { noteId } = req.params;

  try {
    // Find the note by its ID
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Delete the note
    await Note.findByIdAndDelete(noteId);
    res.status(200).json({ message: 'Note deleted' });
  } catch (error) {
    console.error(error); // For debugging purposes
    res.status(500).json({ message: 'Error deleting note', error });
  }
};
const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const { title, content, dueDate } = req.body;
  const userId = req.userId; // From authMiddleware

  try {
    const note = await Note.findOne({ _id: noteId, user: userId });

    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }

    // Update fields
    if (title) note.title = title;
    if (content) note.content = content;
    if (dueDate) note.dueDate = dueDate;

    await note.save();
    res.status(200).json({ message: 'Note updated successfully', note });
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error });
  }
};
const searchNotes = async (req, res) => {
  const userId = req.userId; // From authMiddleware
  const { query } = req.query;

  try {
    const notes = await Note.find({
      user: userId,
      $or: [
        { title: { $regex: query, $options: 'i' } },  // 'i' makes it case-insensitive
        { content: { $regex: query, $options: 'i' } }
      ]
    });

    res.status(200).json({message:'notes found',notes});
  } catch (error) {
    res.status(500).json({ message: 'Error searching notes', error });
  }
};


module.exports = { createNote, getNotes, completeNote, deleteNote, updateNote ,searchNotes};


