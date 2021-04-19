import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';
import { RouterModule } from '@angular/router';
import { FccEeComponent } from './sections/fcc-ee/fcc-ee.component';


@NgModule({
  declarations: [
    AppComponent,
    FccEeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot([{ path: '', component: FccEeComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
