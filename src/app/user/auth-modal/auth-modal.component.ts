import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-auth-modal',
  // standalone: true,
  // imports: [],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss',
})
export class AuthModalComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('auth');
    this.modal.register('test');
  }

  closeModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }
}
