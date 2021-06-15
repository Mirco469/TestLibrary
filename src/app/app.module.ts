import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationModule, ActionPagerModule, SearchModule, TableModule, BreadcrumbsModule,
         ButtonModule, CheckboxModule, DropdownMultiModule, DropdownModule, HeaderTableModule,
         IconModule, InputDateModule, InputTimeModule, RadioButtonModule, StepperModule,
         SwitchModule, TagModule, TextareaModule, TextfieldModule, ToastModule, InputNumberModule,
         AccordionModule, CardRowModule, DrawerModule } from 'enhancers-design-system';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
