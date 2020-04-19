import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface Note {
    noteId: string;
    label: string;
    createdTime: Date;
    lastUpdatedTime: Date;
    text: string;
}