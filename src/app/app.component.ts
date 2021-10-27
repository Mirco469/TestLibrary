import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestLibrary';

  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
    this.modalService.show(ModalComponent, {});
  }
}
