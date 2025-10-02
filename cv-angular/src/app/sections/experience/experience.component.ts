import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { experienceHistory } from '../../data/cv-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  readonly items = experienceHistory;
  readonly caption = 'Tabla de experiencia laboral (periodo, empresa y puesto)';
  readonly footnote = '* Experiencia laboral resumida';
  showExperience = true;

  toggleExperience(): void {
    this.showExperience = !this.showExperience;
  }
}
