import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  pictures: string[] = ["/cert1.png","/cert2.png","/cert3.png","/cert4.png","/cert5.png"];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Mayur - Resume');
  }
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file
    link.download = 'Mayur_Resume.pdf'; // Name of the downloaded file
    link.click();
    link.remove();
  }
}
