import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template:`
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
  `,
  styles:[`
  
  `]
})
export class EventsAppComponent {
  title = 'angular-events';
}
