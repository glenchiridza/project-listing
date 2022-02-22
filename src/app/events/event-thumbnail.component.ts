import { Component, Input, Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">

        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <!-- <div [ngClass]="{green:event?.time ==='8:00 am',bold:event?.time ==='8:00 am'}"  [ngSwitch]="event?.time"> -->
        <!-- <div [ngClass]="getStartTimeClass()"  [ngSwitch]="event?.time"> -->
        <!-- <div [style.color]="event?.time ==='8:00 am' ? '#003300' : '#bbb'"  [ngSwitch]="event?.time"> -->
        <div [ngStyle]="{'color':event?.time ==='8:00 am' ? '#003300' : '#bbb',
            'font-weight':event?.time ==='8:00 am' ?'800':'normal'}"  [ngSwitch]="event?.time">
       
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>

        </div>

        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location : {{event?.location?.address}}</span>
            <span class="pad-left"></span>
            <span> {{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>

        <div *ngIf="event?.onlineUrl">
            Online URL: {{event?.onlineUrl}}
        </div>

        </div>
    `,
    styles:[`
        .pad-left {margin-left:10px;}
        .well div {color:#bbb;}
        .thumbnail {min-height:210px;}

        .green {color:#003300 !important;}
        .bold {font-weight:800}
    `]
})
export class EventThumbnailComponent {

    @Input() event:any

    getStartTimeClass(){
        //const isEarlyStart = this.event && this.event?.time ==='8:00 am';
        //return {green: isEarlyStart, bold:isEarlyStart}
        //or
        // if(this.event && this.event?.time ==='8:00 am')
        //     return 'green bold';
        // return ''
        //or
        if(this.event && this.event?.time ==='8:00 am')
            return ['green', 'bold'];
        return []

    }

    //if it is for style the function will belike
    getStartTimeStyles(){
        if(this.event && this.event?.time ==='8:00 am')
            return {'color':'#003300', 'font-weight':'800'};
        return {}
    }

    
}