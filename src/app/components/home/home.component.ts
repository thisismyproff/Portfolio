import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    project:any;

    constructor(private titleService: Title,private projectsService: ProjectsService) {
        this.titleService.setTitle('Mayur - Home');
    }

    ngOnInit() {
       this.project = this.projectsService.getProjectById(0);
    }
}
