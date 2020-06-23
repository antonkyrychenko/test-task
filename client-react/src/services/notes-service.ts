import Axios from 'axios';
import Note from '../models/note';

export const getNotes = async (): Promise<Array<Note>> => {
    const response = await Axios.get<Array<Note>>(`https://localhost:44365/api/notes`);

    return response.data;
};

export const getNoteById = async (noteId: string): Promise<Array<Note>> => {
    const response = await Axios.get<Array<Note>>(`https://localhost:44365/api/notes/${noteId}`);

    return response.data;
};

export const addNote = async (note: Note): Promise<any> => {
    const response = await Axios.post<any>(`https://localhost:44365/api/notes`, note);

    return response.data;
};

export const updateNote = async (note: Note): Promise<any> => {
    const response = await Axios.put<any>(`https://localhost:44365/api/notes/${note.noteId}`, note);

    return response.data;
};

export const deleteNote = async (noteId: string): Promise<any> => {
    const response = await Axios.delete<any>(`https://localhost:44365/api/notes/${noteId}`);

    return response.data;
};