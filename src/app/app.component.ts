import { Component, Inject } from '@angular/core';
import {
  NgxEasyTranslateService,
  ROOT_TRANSLATE
} from '@wellwind/ngx-easy-translate';
import { Observable } from 'rxjs';
import { RootTranslate } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get translate() {
    return this.rootTranslate;
  }

  constructor(
    private translateService: NgxEasyTranslateService,
    @Inject(ROOT_TRANSLATE) private rootTranslate: Observable<RootTranslate>
  ) {}

  changeLang(lang: string) {
    this.translateService.changeCurrentLanguage(lang);
  }
}
