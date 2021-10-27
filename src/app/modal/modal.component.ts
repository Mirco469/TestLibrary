import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @ViewChild("defaultRTE")
  public rteObj;

  richtexteditorModel = "<b>Ciao</b>"

  constructor() { }

  ngOnInit(): void {
  }

  public onRTECreate(e: any): void {
    console.log("QUA");
    console.log(this.rteObj);
    setTimeout(() => {
      this.rteObj.refreshUI();
    }, 0);
  }
}
