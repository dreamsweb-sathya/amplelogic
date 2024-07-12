import { ProjectsComponent } from './projects/projects.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashInfoComponent } from './dash-info/dash-info.component';

const routes: Routes = [
  { path: '', component: DashboardComponent ,
    children:[
      {
        path: 'info', component: DashInfoComponent 
      },
      { path: 'projects', component: ProjectsComponent }, 
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
