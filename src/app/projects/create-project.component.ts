import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ProjectService } from ".";

@Component({
    templateUrl:'create-project.component.html',
    styles:[`
      em {float:right; color:'#e05c65'; padding-left:10px;}
      .error input {background-color:#e3c3c5;}
      .error ::-webkit-input-placeholder {color:#999;}
      .error ::-moz-placeholder{color:#999;}
      .error ::ms-input-placeholder{color:#999;}
  `]
})
export class CreateProjectComponent{
    newProject:any;
    isDirty:boolean = false

    constructor(private router:Router,private projectService:ProjectService){}

    saveProject(formValues:any){
        this.isDirty = true
        this.projectService.saveProject(formValues);
        this.router.navigate(['/projects'])
    }

    cancel(){
        this.router.navigate(['/projects'])
    }
}