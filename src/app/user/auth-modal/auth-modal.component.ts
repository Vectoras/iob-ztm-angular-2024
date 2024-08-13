import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  // standalone: true,
  // imports: [],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent {
  constructor(public modal: ModalService) {}

  closeModal($event: Event) {
    $event.preventDefault();

    this.modal.toggleModal();
  }
}
