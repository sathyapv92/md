import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DialogComponent, DialogContentExampleDialog } from './dialog/dialog.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestDialogComponent, DialogOverviewExampleDialog } from './test-dialog/test-dialog.component';
import { MyOwnCustomMaterialModule } from './test-dialog/material-module';
import { DealEntryComponent } from './deal-entry/deal-entry.component';
import { LoadingModule } from 'ngx-loading';
import { BusyModule } from 'angular2-busy';

import { HttpClientModule } from '@angular/common/http';
import { TestService } from './test.service';
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogContentExampleDialog,
    TestDialogComponent,
    DialogOverviewExampleDialog,
    DealEntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    BusyModule,
    HttpClientModule







  ],
  entryComponents: [DialogComponent, DialogContentExampleDialog, TestDialogComponent, DialogOverviewExampleDialog],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
