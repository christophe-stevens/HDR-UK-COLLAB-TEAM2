import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CrudPatientComponent } from './crud-patient/crud-patient.component';
import { AddPatientComponent } from './crud-patient/add-patient/add-patient.component';
import {FormsModule} from '@angular/forms';
import { ListPatientComponent } from './crud-patient/list-patient/list-patient.component';
import { CqlSearchComponent } from './cql-search/cql-search.component';
import { AddLibraryComponent } from './cql-search/add-library/add-library.component';
import { ListLibraryComponent } from './cql-search/list-library/list-library.component';
import { RunLibraryComponent } from './cql-search/run-library/run-library.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    CrudPatientComponent,
    ListPatientComponent,
    CqlSearchComponent,
    AddLibraryComponent,
    ListLibraryComponent,
    RunLibraryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
