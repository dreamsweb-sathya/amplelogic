import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-dash-info',
  templateUrl: './dash-info.component.html',
  styleUrls: ['./dash-info.component.scss']
})
export class DashInfoComponent {
  constructor(private projectsService: ProjectsService) {}
  projects!: any[];
  dashSections = [
    {
    title:"Budget",
    count:"$750.90",
    icon: "bi-chevron-down",
    percent:"30%",
    color:'#016D1D'
  },
  {
    title:"New projects",
    count:"215",
    icon: "bi-chevron-down",
    percent:"30%",
    color:'#016D1D'
  },
  {
    title:"Total hours",
    count:"1.400",
    icon: "bi-chevron-down",
    percent:"-10%",
    color:'#D60000'
  },
  {
    title:"Work load",
    count:"95%",
    icon: "bi-chevron-down",
    percent:"30%",
    color:'#629CDC'
  }

]
  ngOnInit() {
    this.getProjects()
  }

  getProjects(){
    this.projectsService.getCustomers().subscribe((customers) => { 
      if(customers){
        this.projects = customers.users; 
      }
    });
  }
}
