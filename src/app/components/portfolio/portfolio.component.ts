import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../../models/Project';
import { ProjectsService } from '../../services/projects.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.95)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PortfolioComponent {

  projects:Project[]= [];
  


  constructor(private titleService: Title,private projectsService: ProjectsService) {
    this.titleService.setTitle('Mayur - Portfolio');
    this.projects = this.projectsService.getProjects();
  }
}
