import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../sections/header/header.component';
import { SummaryComponent } from '../../sections/summary/summary.component';
import { ExperienceComponent } from '../../sections/experience/experience.component';
import { EducationComponent } from '../../sections/education/education.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { StackOverflowComponent } from '../../sections/stackoverflow/stack-overflow.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    HeaderComponent,
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
    StackOverflowComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent {}
