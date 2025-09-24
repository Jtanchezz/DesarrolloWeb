import { Component } from '@angular/core';
import { HeaderComponent } from '../../sections/header/header.component';
import { SummaryComponent } from '../../sections/summary/summary.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { EducationComponent } from '../../sections/education/education.component';
import { SkillsComponent } from '../../sections/skills/skills.component';

@Component({
  selector: 'app-cv',
  imports: [
    HeaderComponent,
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {}
