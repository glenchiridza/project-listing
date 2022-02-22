import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template:`
      <app-navbar></app-navbar>
      <events-list></events-list>
  `,
  styles:[`
  
  `]
})
export class EventsAppComponent {
  title = 'angular-events';
}
