import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrService } from './commons/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventListComponent } from './events/events-list.component';
import { EventService } from './events/shared/events.service';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    NavbarComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
