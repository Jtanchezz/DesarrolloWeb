import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-experience-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-jobs.component.html',
  styleUrl: './experience-jobs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceJobsComponent {
  readonly jobs: readonly string[];

  constructor(private readonly dataService: DataService) {
    this.jobs = this.dataService.jobs;
  }
}
