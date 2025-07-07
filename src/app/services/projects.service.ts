import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects:Project[]= [
    { id:0,
      name:'QuizPreen',
      summary:'A quiz application that allows users to create, share, and take quizzes on various topics. It features user authentication, quiz creation, and a leaderboard.',
      description:'Developed QuizPreen, increasing user engagement by 25% with interactive features.Engineered the platform with Java Spring, Angular, and Angular Material UI, cutting development time by 30%.Optimized quiz creation, boosting efficiency by 40% and raising user satisfaction by 20%.',
      projectUrl:'',
      tags:[Tag.ANGULAR, Tag.SPRING, Tag.AWS],
      pictures:['assets/images/quizpreen/quizpreen1.png','assets/images/quizpreen/quizpreen2.png','assets/images/quizpreen/quizpreen3.png','assets/images/quizpreen/quizpreen4.png']
    },
    { id:1,
      name:'Emotion Detection',
      summary:'An emotion detection system that uses CNN and OpenCV to analyze facial expressions in real-time. It can classify emotions like happiness, sadness, anger, and surprise.',
      description:'Developed an Emotion Detection system using Computer Vision techniques to analyze facial expressions in real time.Used machine learning models (such as CNNs or pre-trained models like OpenCV or DeepFace) to detect emotions from video streams or images. Achieved an accuracy rate of 70% or higher in classifying emotions such as happiness, sadness, anger, surprise, and others.',
      projectUrl:'',
      tags:[Tag.PYTHON, Tag.CNN, Tag.OPENCV],
      pictures:['assets/images/quizpreen/quizpreen1.png','assets/images/quizpreen/quizpreen2.png','assets/images/quizpreen/quizpreen3.png','assets/images/quizpreen/quizpreen4.png']
    },
    { id:2,
      name:'License Reader',
      summary:'A license card reader application that uses OpenCV and Python to extract text from license cards. It can read various formats and languages, making it versatile .',
      description:'Implemented Optical Character Recognition (OCR) in Python using Tesseract and OpenCV. Achieved an accuracy rate of over 80% in text extraction from images.',
      projectUrl:'',
      tags:[Tag.PYTHON, Tag.OPENCV],
      pictures:['assets/images/quizpreen/quizpreen1.png','assets/images/quizpreen/quizpreen2.png','assets/images/quizpreen/quizpreen3.png','assets/images/quizpreen/quizpreen4.png']
    },
  ];
    
  
  

  constructor() { }


  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
  
}
