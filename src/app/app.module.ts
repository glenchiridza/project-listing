import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  CreateProjectComponent,ProjectDetailsComponent,ProjectThumbnailComponent
  ,ProjectListComponent,ProjectListResolver,ProjectService,ProjectRouteActivator,CreateSessionComponent
} from './projects/index'

import { ToastrService } from './commons/toastr.service';
import { Error404Component } from './errors/404.component';
import { ProjectsAppComponent } from './projects-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './route';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjectsAppComponent,
    NavbarComponent,
    ProjectListComponent,
    ProjectThumbnailComponent,
    ProjectDetailsComponent,
    CreateProjectComponent,
    Error404Component,
    CreateSessionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    ProjectService,
    ToastrService,
    ProjectRouteActivator,
    ProjectListResolver,
    AuthService,
    {
      provide:'canDeactivateCreateProject',
      useValue:checkDirtyState
    }
  ],
  bootstrap: [ProjectsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateProjectComponent){
  if(!component.isDirty)
    return window.confirm('you have not saved this form, sure you want to quit?')
  return true
}
