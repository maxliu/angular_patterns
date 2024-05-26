import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageSvcService {

  constructor() { }

  private readonly messageSource = new BehaviorSubject<string>('default message');

  get currentMessage$() {
    return this.messageSource.asObservable();
  }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

}
