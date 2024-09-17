import { Component, Input, OnInit, ElementRef } from '@angular/core';
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

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    // document.body.appendChild(this.el.nativeElement);
  }

  closeModal(id: string): void {
    this.modal.toggleModal(this.modalID);
  }
}
