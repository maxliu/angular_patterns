import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageUpdateComponent } from './message-update/message-update.component';
import { MessagCheckComponent } from './messag-check/messag-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageUpdateComponent, MessagCheckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'P_1_Subject_Observable';
}
