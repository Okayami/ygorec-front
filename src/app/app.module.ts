import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const appRouteList: Routes = [
  {
      path: 'landing',
      component: FirstComponent
  },
  {
      path: 'search',
      component: SecondComponent
  },
  {
      path: '**',
      redirectTo: 'landing'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(appRouteList),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
