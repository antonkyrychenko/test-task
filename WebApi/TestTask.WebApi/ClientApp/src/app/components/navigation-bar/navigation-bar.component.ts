import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent {
  themeClass = 'candy-app-theme';

  languageList = ['EN', 'RU'];
  
  selectedLang: string;

  constructor(
    private router: Router,
    public translate: TranslateService) {
      this.translate.addLangs(this.languageList);
      this.translate.setDefaultLang('EN');
      this.selectedLang = 'EN';
  }

  navigateToNotes() {
    this.router.navigate(['notes']);
  }

  selectLang(value) {
    console.log(value);
    this.translate.use(value)
  }
}
