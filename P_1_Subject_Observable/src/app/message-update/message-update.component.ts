import { Component, OnInit } from '@angular/core';
import { MessageSvcService } from '../message-svc.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-update.component.html',
  styleUrl: './message-update.component.scss'
})
export class MessageUpdateComponent implements OnInit{
  message: string = '';

  constructor(private messageSvc:MessageSvcService) { }

  ngOnInit() {
    this.messageSvc.currentMessage$.subscribe(message => this.message = message);
  }

  messagChange() {
    this.messageSvc.changeMessage(this.message);
  }
}
