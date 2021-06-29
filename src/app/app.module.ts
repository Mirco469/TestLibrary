import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationModule, ActionPagerModule, SearchModule, TableModule, BreadcrumbsModule,
         ButtonModule, CheckboxModule, DropdownMultiModule, DropdownModule, HeaderTableModule,
         IconModule, InputDateModule, InputTimeModule, RadioButtonModule, StepperModule,
         SwitchModule, TagModule, TextareaModule, TextfieldModule, ToastModule, InputNumberModule,
         AccordionModule, CardRowModule, DrawerModule, TimetableEditorModule, TrowserModule, SignatureInputModule } from 'enhancers-design-system';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    InputTimeModule,
    RadioButtonModule,
    StepperModule,
    SwitchModule,
    TagModule,
    TextareaModule,
    TextfieldModule,
    ToastModule,
    InputNumberModule,
    AccordionModule,
    CardRowModule,
    DrawerModule,
    InputDateModule,
    TimetableEditorModule,
    TrowserModule,
    SignatureInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
