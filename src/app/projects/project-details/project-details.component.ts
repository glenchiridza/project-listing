import { Component } from "@angular/core";
import { ProjectService } from "../shared/projects.service";
import { ActivatedRoute } from "@angular/router";
import { IProject, ISession } from "..";

@Component({
    templateUrl:'./project-details.component.html',
    styles:[`
    .container {padding-left: 20px; padding-right: 20px;}
    .project-image {height: 100px;}
    a {cursor:pointer;}
    `]
})

export class ProjectDetailsComponent {

    project!:IProject|any;
    addMode!:boolean;

    constructor(private projectService:ProjectService,private route:ActivatedRoute){}

    ngOnInit(){
        this.project = this.projectService
                         .getProject(+this.route.snapshot.params['id']);
    }

    addSession(){
        this.addMode = true;
    }

    saveNewSession(session:ISession){
        const nextId = Math.max.apply(null,this.project.sessions.map((s:any) =>
            s.id));
        session.id = nextId + 1;
        this.project.sessions.push(session)
        this.projectService.updateProject(this.project)
        this.addMode = false;
    }
    cancelAddSession(){
        this.addMode = false;
    }
}

