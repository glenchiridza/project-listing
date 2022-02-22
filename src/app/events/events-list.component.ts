import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../commons/toastr.service";
import { EventService } from "./shared/events.service";

@Component({
    
    template:`
        <div>
            <h1>Upcoming Angular Events </h1>

            <hr />
            <div class="row text">
                <div  *ngFor="let event of events"  class="col-md-5">
                    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div> 
            </div>          
            

        </div>
    `
})
export class EventListComponent implements OnInit{

    events!:any[]
    constructor(private eventService:EventService,private toastr:ToastrService){
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
    

    handleThumbnailClick(eventName:any){
        this.toastr.success(eventName)
    }


}