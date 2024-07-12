import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashInfoComponent } from './dash-info/dash-info.component';
import { DashboardComponent } from './dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShellModule } from '../shell/shell.module';


@NgModule({
  declarations: [
    DashInfoComponent,
    DashboardComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShellModule, 
  ]
})
export class DashboardModule { }
