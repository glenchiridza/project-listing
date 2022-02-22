import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ProjectService } from "./shared/projects.service";
import {map} from 'rxjs/operators';

@Injectable()
export class ProjectListResolver implements Resolve<any>{

    constructor(private projectService:ProjectService){}

    resolve() {
        return this.projectService.getProjects().pipe(map(projects => projects))
    }

}