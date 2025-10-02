import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { educationHistory } from '../../data/cv-data';

@Component({
  selector: 'app-experience-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-studies.component.html',
  styleUrl: './experience-studies.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceStudiesComponent {
  readonly studies = educationHistory;
}
