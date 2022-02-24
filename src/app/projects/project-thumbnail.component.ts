import { Component, Input, Output,EventEmitter } from "@angular/core";
import { IProject } from ".";

@Component({
    selector: 'project-thumbnail',
    template: `
        <div [routerLink]="['/projects',project.id]" class="well hoverwell thumbnail">

        <h2>{{project?.name}}</h2>
        <div>Date: {{project?.date}}</div>
        <!-- <div [ngClass]="{green:project?.time ==='8:00 am',bold:project?.time ==='8:00 am'}"  [ngSwitch]="project?.time"> -->
        <!-- <div [ngClass]="getStartTimeClass()"  [ngSwitch]="project?.time"> -->
        <!-- <div [style.color]="project?.time ==='8:00 am' ? '#003300' : '#bbb'"  [ngSwitch]="project?.time"> -->
        <div [ngStyle]="{'color':project?.time ==='8:00 am' ? '#31b261' : '#275382',
            'font-weight':project?.time ==='8:00 am' ?'800':'normal'}"  [ngSwitch]="project?.time">
       
            Time: {{project?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>

        </div>

        <div>Price: \${{project?.price}}</div>
        <div *ngIf="project?.location">
            <span>Location : {{project?.location?.address}}</span>
            <span class="pad-left"></span>
            <span> {{project?.location?.city}}, {{project?.location?.country}}</span>
        </div>

        <div *ngIf="project?.onlineUrl">
            Online URL: {{project?.onlineUrl}}
        </div>

        </div>
    `,
    styles:[`
        .pad-left {margin-left:10px;}
        .well div {font-weight:100;}
        .thumbnail {min-height:210px;}

        .green {color:#003300 !important;}
        .bold {font-weight:800}
    `]
})
export class ProjectThumbnailComponent {

    @Input() project!:IProject

    getStartTimeClass(){
        //const isEarlyStart = this.project && this.project?.time ==='8:00 am';
        //return {green: isEarlyStart, bold:isEarlyStart}
        //or
        // if(this.project && this.project?.time ==='8:00 am')
        //     return 'green bold';
        // return ''
        //or
        if(this.project && this.project?.time ==='8:00 am')
            return ['green', 'bold'];
        return []

    }

    //if it is for style the function will belike
    getStartTimeStyles(){
        if(this.project && this.project?.time ==='8:00 am')
            return {'color':'#003300', 'font-weight':'800'};
        return {}
    }

    
}