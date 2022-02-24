import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProject } from ".";
import { ToastrService } from "../commons/toastr.service";
import { ProjectService } from "./shared/projects.service";

@Component({
    
    template:`
        <div>
            <h1>Projects Listing </h1>

            <hr />
            <div class="row text">
                <div  *ngFor="let project of projects"  class="col-md-5">
                    <project-thumbnail (click)="handleThumbnailClick(project.name)" [project]="project"></project-thumbnail>
                </div> 
            </div>          
            

        </div>
    `
})
export class ProjectListComponent implements OnInit{

    projects!:IProject[]
    constructor(private projectService:ProjectService,
        private toastr:ToastrService,private route:ActivatedRoute){
    }

    ngOnInit(){
        // this.projectService.getprojects().subscribe((projects:any)=>{
        //     this.projects = projects;
        // })
        this.projects = this.route.snapshot.data['projects']
    }
    

    handleThumbnailClick(projectName:any){
        this.toastr.success(projectName)
    }


}