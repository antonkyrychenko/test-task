import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@components/common.module';

// Material
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';

// Components
import { NoteComponent } from './note.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { TextComponent } from './text/text.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

const components = [
    TextComponent,
    NoteComponent,
    GeneralInfoComponent
];

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        TranslateModule,
        MatToolbarModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [],
    declarations: components,
    exports: components
})

export class NoteModule { }
