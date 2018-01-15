import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ApiComponent } from './../app/components/api/api.component';
import { ChartsComponent } from '../app/components/charts/charts.component';
import { CrudComponent } from '../app/components/crud/crud.component';
import { FormsComponent } from '../app/components/forms/forms.component';
import { AppComponent } from '../app/app.component';

const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },
     { path: 'home', component: AppComponent },
     { path: 'api', component: ApiComponent },
     { path: 'crud', component: CrudComponent },
     { path: 'charts', component: ChartsComponent },
     { path: 'form', component: FormsComponent },
     { path: 'remove', redirectTo: 'contact' },
    ];

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
          RouterModule.forRoot(routes) // <-- routes 
        ],
        bootstrap: [ AppComponent ],
        providers: [
            { provide: LocationStrategy, useClass: HashLocationStrategy }
        ]}) 
        
        class RoutesDemoAppModule {} 
        
        platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
         .catch((err: any) => console.error(err));