import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnPushDetectionComponent } from './on-push-detection/on-push-detection.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushDetectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
