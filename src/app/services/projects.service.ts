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
      projectUrl:'https://github.com/thisismyproff?tab=repositories',
      tags:[Tag.JAVA,Tag.ANGULAR, Tag.SPRING],
      pictures:['/quizPreen1.png','/quizPreen2.png','/quizPreen3.png']
    },
    { id:1,
      name:'Secret Santa',
      summary:'Java program that assigns Secret Santa pairs among employees',
      description:'This program assigns Secret Santa pairs among employees while following rules:No one gifts themselves.No repetition of last years pairing.This program takes input as CSV and ouputs CSV file with assigned pairs.',
      projectUrl:'https://github.com/thisismyproff/Secret_Santa.git',
      tags:[Tag.JAVA],
      pictures:['/secretSanta1.png','/secretSanta2.png']
    },
    { id:2,
      name:'Movie Recommendation',
      summary:'A movie recommendation system that suggests movies based on user preferences and ratings.',
      description:'Developed a movie recommendation system using Python and machine learning algorithms(Support Vector Machine), achieving a 90% accuracy rate in predictions.Implemented collaborative filtering and content-based filtering techniques to enhance user experience and engagement.',
      projectUrl:'https://github.com/thisismyproff/AI_PROJECTS.git',
      tags:[Tag.PYTHON, Tag.ML],
      pictures:['/movieR1.png','/movieR2.png','/movieR3.png']
    },
    { id:3,
      name:'Wine Quality prediction',
      summary:'A machine learning model that predicts the quality of wine based on various chemical properties.',
      description:'Developed a wine quality prediction model using Python and machine learning algorithms, achieving an accuracy of 85%.Utilized regression techniques to analyze chemical properties and predict wine quality, enhancing decision-making for winemakers.',
      projectUrl:'https://github.com/thisismyproff/AI_PROJECTS.git',
      tags:[Tag.PYTHON, Tag.ML],
      pictures:['/wineQuality1.png','/wineQuality2.png','/wineQuality3.png','/wineQuality4.png']
    },
    { id:4,
      name:'Book My Show',
      summary:'A web application API Backend that allows users to book movie tickets online, view movie schedules, and manage bookings.',
      description:'A web application API Backend that allows users to book movie tickets online, view movie schedules, and manage bookings.Implemented using Java Spring Boot, providing a robust and scalable solution for online ticket booking.',
      projectUrl:'https://github.com/thisismyproff?tab=repositories',
      tags:[Tag.JAVA, Tag.SPRING],
      pictures:[]
    },
  ];




  constructor() { }


  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
  getProjectsByFilter(filterTags:Tag[]){
    let filteredProjects: Project[] = [];
    if(filterTags.length === 0){
      return this.projects;
    }
    this.projects.forEach(function(project){
      let foundAll = true;
      filterTags.forEach(function(tag){
        if(project.tags.includes(tag)=== false){
          foundAll = false;
        }
      });
      if(foundAll){
      filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }

}
