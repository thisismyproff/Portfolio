import { Component, Input } from '@angular/core';
import { Project } from '../../models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project= {}  as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService :BsModalService) {
  }
  
  OpenProjectModal() {
    let modalOptions: ModalOptions = {
    class: 'modal-lg', // Set the size of the modal
    backdrop: 'static', // Prevent closing the modal by clicking outside
    keyboard: false,
    initialState:{
      project: this.project // Pass the project data to the modal
    } 
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent,modalOptions);
  }

}
