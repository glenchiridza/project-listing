import { Component } from "@angular/core";
import { Router } from "@angular/router";

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

    isDirty:boolean = false

    constructor(private router:Router){}

    saveProject(){
        this.isDirty = true
    }

    cancel(){
        this.router.navigate(['/projects'])
    }
}