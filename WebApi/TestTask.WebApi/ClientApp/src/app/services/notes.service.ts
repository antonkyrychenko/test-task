import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import { Note } from '@models';

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    constructor(private http: HttpService) { }

    getNotes(): Observable<Array<Note>> {
        return this.http.Get<Array<Note>>('notes');
    }

    getNoteById(id: string): Observable<Note> {
        return this.http.Get<Note>(`notes/${id}`);
    }

    addNote(note: Note): Observable<any> {
        return this.http.Post<any>('notes', note);
    }

    editNote(note: Note): Observable<any> {
        return this.http.Put<any>(`notes/${note.noteId}`, note);
    }

    removeNote(noteId: string): Observable<any> {
        return this.http.Delete<any>(`notes/${noteId}`);
    }
}
