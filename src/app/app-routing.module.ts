import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'portfolio',
    component: PortfolioComponent
  },
  {
    path:'resume',
    component: ResumeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: HomeComponent // Redirect to home for any unknown paths
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
