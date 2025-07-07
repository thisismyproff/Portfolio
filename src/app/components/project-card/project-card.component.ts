import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project= {}  as Project;

}
