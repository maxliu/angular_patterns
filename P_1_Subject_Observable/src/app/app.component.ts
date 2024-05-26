import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageShowComponent } from './message-show/message-show.component';
import { MessagCheckComponent } from './messag-check/messag-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageShowComponent, MessagCheckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'P_1_Subject_Observable';
}
