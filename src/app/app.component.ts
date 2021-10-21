import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    setTimeout(() => {
      this.timeout = "timeout";
    }, 3000);
    setTimeout(() => {
      this.objectTimeout.value = "CHANGED"
    }, 4000);
  }

  startup = "startup";
  timeout;
  objectTimeout = {
    value: "unchangedValue"
  }
}
