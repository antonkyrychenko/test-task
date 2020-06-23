import * as notesService from '../services/notes-service';
import Note from '../models/note';
import { useEffect, useState } from 'react';

const useNotes = () => {
    const [notes, setNotes] = useState<Array<Note>>();

    const getNotes = async () => {
        setNotes(await notesService.getNotes());
    }

    const addNote = async (note: Note, callback?: () => void) => {
        await notesService.addNote(note);
        await getNotes();

        callback && callback();
    }

    const updateNote = async (note: Note, callback?: () => void) => {
        await notesService.updateNote(note);
        await getNotes();

        callback && callback();
    }

    const deleteNote = async (noteId: string) => {
        await notesService.deleteNote(noteId);
        await getNotes();
    }

    const getNoteById = (noteId: string) => {
        return notes?.find(note => note.noteId === noteId);
    }

    useEffect(() => {
        if (!notes) {
            getNotes();
        }
    });

    return { notes, addNote, updateNote, deleteNote, getNoteById };
}

export default useNotes;