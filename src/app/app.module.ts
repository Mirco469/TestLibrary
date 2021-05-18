import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationModule, ActionPagerModule, SearchModule, TableModule, BreadcrumbsModule,
         ButtonModule, CheckboxModule, DropdownMultiModule, DropdownModule, HeaderTableModule,
         IconModule, InputDateModule, InputTimeModule, RadioButtonModule, StepperModule,
         SwitchModule, TagModule, TextareaModule, TextfieldModule, ToastModule, InputNumberModule } from 'enhancers-design-system';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NavigationModule,
    ActionPagerModule,
    SearchModule,
    TableModule,
    BreadcrumbsModule,
    ButtonModule,
    CheckboxModule,
    DropdownMultiModule,
    DropdownModule,
    HeaderTableModule,
    IconModule,
    InputDateModule,
    InputTimeModule,
    RadioButtonModule,
    StepperModule,
    SwitchModule,
    TagModule,
    TextareaModule,
    TextfieldModule,
    ToastModule,
    InputNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
