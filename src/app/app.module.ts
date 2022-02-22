import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventListComponent } from './events/events-list.component';
import { EventService } from './events/shared/events.service';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
