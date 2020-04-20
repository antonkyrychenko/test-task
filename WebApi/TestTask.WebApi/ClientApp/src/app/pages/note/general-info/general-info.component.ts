import { Component, Input } from '@angular/core';
import { Note } from '@models';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent {
  @Input() note: Note;

  constructor(private translate: TranslateService) { }

  getGeneralInfo() {
    return [
      {
        key: 'Id : ',
        value: this.note.noteId
      },
      {
        key: `${this.translate.instant('NOTES.LABEL')} : `,
        value: this.note.label
      }, {
        key: `${this.translate.instant('NOTES.CREATED_TIME')} : `,
        value: new Date(this.note.createdTime).toLocaleString()
      },
      {
        key: `${this.translate.instant('NOTES.LAST_UPDATED_tIME')} : `,
        value: new Date(this.note.lastUpdatedTime).toLocaleString()
      }
    ];
  }
}
