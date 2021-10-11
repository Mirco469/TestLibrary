import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { NavigationModule, ActionPagerModule, SearchModule, TableModule, BreadcrumbsModule,
         ButtonModule, CheckboxModule, DropdownMultiModule, DropdownModule, HeaderTableModule,
         IconModule, InputDateModule, InputTimeModule, RadioButtonModule, StepperModule,
         SwitchModule, TagModule, TextareaModule, TextfieldModule, ToastModule, InputNumberModule,
         AccordionModule, CardRowModule, DrawerModule, TimetableEditorModule, TrowserModule, SignatureInputModule,
         AccordionTemplateModule, TooltipModule, InputDateTimeModule, TextDropdownModule, TableTemplateModule } from 'enhancers-design-system';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

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
    SignatureInputModule,
    AccordionTemplateModule,
    TooltipModule,
    InputDateTimeModule,
    BsDatepickerModule.forRoot(),
    TextDropdownModule,
    TableTemplateModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'it-IT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
