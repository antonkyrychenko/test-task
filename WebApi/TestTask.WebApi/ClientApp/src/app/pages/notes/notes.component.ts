import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '@models';
import { Router } from '@angular/router';
import { NotesService } from '@services';
import { switchMap, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  $notes: Observable<Array<Note>>;

  displayedColumns: string[] = ['label', 'createdTime', 'lastUpdatedTime', 'id', 'remove'];

  constructor(
    private notesService: NotesService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.$notes = this.notesService.getNotes();
  }

  navigateToNote(id: string): void {
    this.router.navigate(['notes', id]);
  }

  removeNote(noteId: string): void {
    this.$notes = this.notesService.removeNote(noteId).pipe(
      switchMap(() => this.notesService.getNotes())
    );
  }

  openAddNoteDialog(): void {
    const dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '500px'
    });

    dialogRef.componentInstance.OnOk.pipe(
      switchMap((note) => this.notesService.addNote(note)),
      tap(() => this.$notes = this.notesService.getNotes())
    ).subscribe();
  }
}
