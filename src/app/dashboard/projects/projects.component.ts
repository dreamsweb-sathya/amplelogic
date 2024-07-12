import { Component } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(private projectsService: ProjectsService) {}
  projects!: any[];
  ngOnInit() {
    this.projectsService.getCustomers().subscribe((customers) => {
      if(customers){
        this.projects = customers.users; 
      }
    });
  }
}
