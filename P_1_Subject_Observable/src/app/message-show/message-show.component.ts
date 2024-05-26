import { Component, OnInit } from '@angular/core';
import { MessageSvcService } from '../message-svc.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-show',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-show.component.html',
  styleUrl: './message-show.component.scss'
})
export class MessageShowComponent implements OnInit {

  message: string = '';

  constructor(private messageSvc:MessageSvcService) { }

  ngOnInit() {
    this.messageSvc.currentMessage$.subscribe(message => this.message = message);
  }

  messagChange() {
    this.messageSvc.changeMessage(this.message);
  }
}
