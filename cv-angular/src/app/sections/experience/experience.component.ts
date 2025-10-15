import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ExperienceService, Experience } from './experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  private readonly experienceService = inject(ExperienceService);

  readonly experiences$: Observable<Experience[]> = this.experienceService
    .getExperiences()
    .pipe(
      catchError((error: Error) => {
        this.errorMessage =
          error.message ?? 'Ocurrió un error al cargar la experiencia laboral.';
        return of([]);
      })
    );
  readonly caption = 'Tabla de experiencia laboral (periodo, empresa y puesto)';
  readonly footnote = '* Experiencia laboral resumida';
  showExperience = true;
  errorMessage: string | null = null;

  toggleExperience(): void {
    this.showExperience = !this.showExperience;
  }
}
