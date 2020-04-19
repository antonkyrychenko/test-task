import { Component, OnInit, EventEmitter, Inject } from '@angular/core';
import { Note } from '@models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.css']
})
export class AddNoteDialogComponent {
  OnOk: EventEmitter<Note> = new EventEmitter();

  note: Note;

  constructor(
    public dialogRef: MatDialogRef<AddNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.note = {
      label: '', 
      text: '', 
      noteId:'', 
      createdTime: new Date(Date.now()),
      lastUpdatedTime: new Date(Date.now())
    }
   }

  cancel(): void {
    this.dialogRef.close();
  }

  add(): void {
    this.OnOk.emit(this.note);
    this.dialogRef.close();
  }
}
