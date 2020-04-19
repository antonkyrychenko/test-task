import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {
  @Input() text: string;
  @Output() changeText: EventEmitter<string>;

  isEditing: boolean;

  constructor() {
    this.changeText = new EventEmitter();
  }

  editNoteText(): void {
    this.isEditing = true;
  }

  saveNoteText(text: string): void {
    this.isEditing = false;

    this.changeText.emit(text);
  }
}
