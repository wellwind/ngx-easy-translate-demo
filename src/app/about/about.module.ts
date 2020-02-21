import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxEasyTranslateModule } from '@wellwind/ngx-easy-translate';
import { from } from 'rxjs';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgxEasyTranslateModule.forFeature(lang =>
      from(import(`./i18n/${lang}`).then(result => result.lang))
    )
  ]
})
export class AboutModule {}
