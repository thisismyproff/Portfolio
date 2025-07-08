import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import{ ModalModule } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    ResumeComponent,
    PortfolioComponent,
    ProjectCardComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule,
    CollapseModule.forRoot(),
    AccordionModule.forRoot(),
    FormsModule,
    TabDirective,
    TabsetComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
