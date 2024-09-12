import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  // standalone: true,
  // imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  // providers: [ModalService],
})
export class ModalComponent implements OnInit {

  @Input() modalID: string = '';

  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  closeModal(id: string): void {
    this.modal.toggleModal(this.modalID);
  }
}
