import { Component } from "@angular/core";
import { ProjectService } from "../shared/projects.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'./project-details.component.html',
    styles:[`
    .container {padding-left: 20px; padding-right: 20px;}
    .project-image {height: 100px;}
    a {cursor:pointer;}
    `]
})

export class ProjectDetailsComponent {

    project:any;

    constructor(private projectService:ProjectService,private route:ActivatedRoute){}

    ngOnInit(){
        this.project = this.projectService
                         .getProject(+this.route.snapshot.params['id']);
    }
}