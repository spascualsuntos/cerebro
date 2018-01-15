import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';
import { CrudComponent } from './components/crud/crud.component';
import { ChartsComponent } from './components/charts/charts.component';
import { FormsComponent } from './components/forms/forms.component';


@NgModule({
  declarations: [
    AppComponent,
    ApiComponent,
    CrudComponent,
    ChartsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
