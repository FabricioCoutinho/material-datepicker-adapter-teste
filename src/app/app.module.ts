/* utilizando date-fns */ 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DateFnsDateAdapter, MAT_DATE_FNS_DATE_FORMATS} from './date-fns-date-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatDatepickerModule,  } from '@angular/material/datepicker';
import  localept from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';

registerLocaleData(localept, 'pt');


import { 
} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: DateFnsDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_DATE_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/* utilizando moment */

/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentDateAdapter} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import  localept from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';

//registerLocaleData(localept, 'pt');

import * as _moment from 'moment';
import ptbr  from 'moment/locale/pt-br';
_moment.locale('pt-br');

const moment = _moment;


export const MY_FORMATS =
{
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    }
};

import { 
} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private adapter: DateAdapter<any>) {
    this.adapter.setLocale(moment.locale());
  }
}
*/


/* utilizando a custom parser */
/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppDateFormat, APP_DATE_FORMATS } from './date-format';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import  localept from '@angular/common/locales/pt';
import { registerLocaleData} from '@angular/common';

registerLocaleData(localept, 'pt');

import { 
    MAT_DATE_FORMATS,
    MAT_DATE_LOCALE
} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: MAT_DATE_LOCALE, useValue: 'pt'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS},
    {provide: DateAdapter, useClass: AppDateFormat},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
*/