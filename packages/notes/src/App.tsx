// App.tsx
import React, { useState } from "react";
import { addNote, updateNote, getNotes, getNoteById } from "./utils";
import EditNoteScreen from "./EditNoteScreen/EditNoteScreen";
import NotesListScreen from "./NoteListScreen/NoteListScreen";

const App = () => {
  const [notes, setNotes] = useState(getNotes());
  const [isEdit, setIsEdit] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  const handleAddNote = () => {
    setSelectedNoteId(null);
    setIsEdit(true);
  };

  const handleEditNote = (noteId: string) => {
    setSelectedNoteId(noteId);
    setIsEdit(true);
  };

  const handleSaveNote = (title: string, content: string) => {
    if (selectedNoteId) {
      updateNote(selectedNoteId, title, content);
    } else {
      addNote(title, content);
    }
    setNotes(getNotes());
    setIsEdit(false);
    setSelectedNoteId(null);
  };

  return (
    <>
      {isEdit ? (
        <EditNoteScreen
          note={selectedNoteId ? getNoteById(selectedNoteId) : null}
          onSave={handleSaveNote}
          onBack={() => setIsEdit(false)}
        />
      ) : (
        <NotesListScreen
          notes={notes}
          onEditNote={handleEditNote}
          onAddNote={handleAddNote}
        />
      )}
    </>
  );
};

export default App;
