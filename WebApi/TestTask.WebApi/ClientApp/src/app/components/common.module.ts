import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

// Components
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ListComponent } from './list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

const components = [
  ListComponent,
  NavigationBarComponent,
];

@NgModule({
  imports: [
    MatListModule,
    MatTableModule,
    MatSelectModule,
    TranslateModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [],
  declarations: components,
  exports: components
})

export class CommonModule { }
