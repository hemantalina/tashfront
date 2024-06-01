import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent,
    PdfViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule // Add FormsModule here
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add this line
  bootstrap: [AppComponent]
})
export class AppModule { }
