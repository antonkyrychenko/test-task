import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '@models';
import { NotesService } from '@services';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  $note: Observable<Note>;

  isEditing: boolean;
  noteId: string;

  constructor(
    private notesService: NotesService,
    private route: ActivatedRoute) {
    this.noteId = this.route.snapshot.params.id;
    this.isEditing = false;
  }

  ngOnInit(): void {
    this.$note = this.notesService.getNoteById(this.noteId);
  }


  editNoteLabel(): void {
    this.isEditing = true;
  }

  saveNoteLabel(label: string): void {
    this.isEditing = false;

    this.$note = this.$note.pipe(
      switchMap((note) => {
        note.label = label;
        return this.notesService.editNote(note);
      }),
      switchMap(() => this.notesService.getNoteById(this.noteId))
    );
  }

  saveNoteText(text: string): void {
    this.$note = this.$note.pipe(
      switchMap((note) => {
        note.text = text;
        return this.notesService.editNote(note);
      }),
      switchMap(() => this.notesService.getNoteById(this.noteId))
    );
  }
}
