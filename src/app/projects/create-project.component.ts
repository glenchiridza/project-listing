import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template:`
        <h1>New Project</h1>
        <hr/>
        <div class="col-md-6">
        <h3>Create Project form will go here</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary" (click)="saveProject()">Save</button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
        
    </div>
    `
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