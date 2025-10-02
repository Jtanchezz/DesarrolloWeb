import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { experienceHistory } from '../../data/cv-data';

@Component({
  selector: 'app-experience-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-jobs.component.html',
  styleUrl: './experience-jobs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceJobsComponent {
  readonly jobs = experienceHistory;
}
