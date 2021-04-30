import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoenixUIModule } from 'phoenix-ui-components';
import { RouterModule } from '@angular/router';
import { FccEeComponent } from './sections/fcc-ee/fcc-ee.component';
import { FccHhComponent } from './sections/fcc-hh/fcc-hh.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    FccEeComponent,
    FccHhComponent,
     HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PhoenixUIModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },	
        { path: 'home', component: HomeComponent },
	{ path: 'fcc-hh', component: FccHhComponent},
	{ path: 'fcc-ee', component: FccEeComponent}	
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
