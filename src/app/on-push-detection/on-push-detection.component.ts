import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-push-detection',
  templateUrl: './on-push-detection.component.html',
  styleUrls: ['./on-push-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushDetectionComponent implements OnInit {

  @Input() startup;
  @Input() timeout;
  @Input() objectTimeout;

  array = ["ele1", "ele2", "ele3"];
  internalTimeout;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.internalTimeout = "internalTimeout";
    }, 5000);
  }

  getEle(idx) {
    console.log("Get Ele");
    return this.array[idx];
  }

  stampa(value) {
    console.log(value);
  }

  someOperations() {
    console.log("bottone");
    for(let i = 0; i < 2000; i++) {
      console.log("for");
    }
    console.log("fine for");
    this.startup = "SOME_OPERATIONS";
  }
}
