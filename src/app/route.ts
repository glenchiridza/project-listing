import {Routes} from '@angular/router';
import {
    
  CreateProjectComponent,ProjectDetailsComponent
  ,ProjectListComponent,ProjectListResolver,ProjectRouteActivator
} from './projects/index';
import { Error404Component } from './errors/404.component';
import { UserModule } from './user/user.module';


export const appRoutes:Routes = [
    {path: 'projects/new',component:CreateProjectComponent,canDeactivate:['canDeactivateCreateProject']},
    {path: 'projects',component:ProjectListComponent,resolve:{projects:ProjectListResolver}},
    {path: 'projects/:id',component:ProjectDetailsComponent, canActivate:[ProjectRouteActivator]},
    {path: '404',component:Error404Component},
    {path: '', redirectTo:'/projects', pathMatch:'full'},

    {path:'user',loadChildren:()=>UserModule}
]