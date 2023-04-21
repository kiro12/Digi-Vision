import { Component } from '@angular/core';
import english from '../lang/en/en'
import arabic from '../lang/ar/ar';
import {TranslateService} from "@ngx-translate/core";
import {GlobalService} from "./global.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(   public translate: TranslateService , public router: Router , public globalService: GlobalService){
    translate.addLangs(['en', 'ar']);
    translate.setTranslation('en', english);
    translate.setTranslation('ar', arabic);
    translate.setDefaultLang('en');
    if (localStorage.getItem('language') && localStorage.getItem('language') !== 'undefined') {
      translate.use(localStorage.getItem('language'));
      this.globalService.language = localStorage.getItem('language');
    } else {
      translate.use('en');
      this.globalService.language = 'en';
      localStorage.setItem('language', 'en');

    }
  }
  title = 'STC-Assignment';
  changeLang() {
    this.globalService.language = this.globalService.language === 'ar' ? 'en' : 'ar'
    this.translate.use(this.globalService.language );
    localStorage.setItem('language', this.globalService.language );
  }
}

