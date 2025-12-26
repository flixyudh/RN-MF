type Note = {
  id: string;
  title: string;
  content: string;
};

let notes: Note[] = [];

export const getNotes = () => notes;

export const getNoteById = (id: string) =>
  notes.find((note) => note.id === id);

export const addNote = (title: string, content: string) => {
  const newNote: Note = {
    id: Date.now().toString(), // instead of uuid
    title,
    content,
  };
  notes.push(newNote);
  return newNote;
};

export const updateNote = (id: string, title: string, content: string) => {
  notes = notes.map((note) =>
    note.id === id ? { ...note, title, content } : note
  );
};

export const deleteNote = (id: string) => {
  notes = notes.filter((note) => note.id !== id);
};
