import {Routes} from '@angular/router';
import {
    
  CreateProjectComponent,ProjectDetailsComponent
  ,ProjectListComponent,ProjectListResolver,ProjectRouteActivator
} from './projects/index';
import { Error404Component } from './errors/404.component';
import { UserModule } from './user/user.module';
import { CreateSessionComponent } from './projects/project-details/create-session.component';


export const appRoutes:Routes = [
    {path: 'projects/new',component:CreateProjectComponent,canDeactivate:['canDeactivateCreateProject']},
    {path: 'projects',component:ProjectListComponent,resolve:{projects:ProjectListResolver}},
    {path: 'projects/:id',component:ProjectDetailsComponent, canActivate:[ProjectRouteActivator]},
    {path: 'projects/session/new',component:CreateSessionComponent},
    {path: '404',component:Error404Component},
    {path: '', redirectTo:'/projects', pathMatch:'full'},

    {path:'user',loadChildren:()=>UserModule}
]