import { Component, OnInit } from '@angular/core';
import { MessageSvcService } from '../message-svc.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messag-check',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './messag-check.component.html',
  styleUrl: './messag-check.component.scss'
})
export class MessagCheckComponent implements OnInit{

  message$: Observable<string>;
  message_str: string = '';

  constructor(private messageSvc:MessageSvcService) {
    this.message$ = this.messageSvc.currentMessage$;
    this.messageSvc.currentMessage$.subscribe(message => this.message_str = message);
   }

  ngOnInit(): void {}
   

}
