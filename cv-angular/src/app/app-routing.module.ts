import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CvComponent } from './pages/cv/cv.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ExperienceJobsComponent } from './sections/experience/experience-jobs.component';
import { ExperienceStudiesComponent } from './sections/experience/experience-studies.component';
import { SkillsComponent } from './sections/skills/skills.component';

export const routes: Routes = [
  {
    path: 'about',
    component: CvComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'jobs'
      },
      {
        path: 'jobs',
        component: ExperienceJobsComponent
      },
      {
        path: 'studies',
        component: ExperienceStudiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
