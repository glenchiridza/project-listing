import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProjectService } from "../shared/projects.service";


@Injectable()
export class ProjectRouteActivator implements CanActivate{
    constructor(private projectService:ProjectService,private router:Router){}

    canActivate(route:ActivatedRouteSnapshot) {
        const projectExists = !!this.projectService.getProject(+route.params['id'])

        if(!projectExists)
            this.router.navigate(['/404'])

        return projectExists
    }

}