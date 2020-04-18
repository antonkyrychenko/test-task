import { Component, OnInit } from '@angular/core';
import { NotesService } from '@services/notes.service';
import { Observable } from 'rxjs';
import { Note } from '@models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  $notes: Observable<Array<Note>>;

  displayedColumns: string[] = ['label', 'createdTime', 'lastUpdatedTime', 'Id'];

  constructor(
    private notesService: NotesService,
    private router: Router) { }

  ngOnInit(): void {
    this.$notes = this.notesService.getNotes();
  }

  navigateToNote(id: string) {
    this.router.navigate(['notes', id]);
  }
}
