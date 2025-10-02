import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { GitHubProjectsService, ProjectItem } from './github-projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe, DatePipe, NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  private readonly username = 'Jtanchezz';
  readonly isLoading = signal(true);
  readonly errorMessage = signal<string | null>(null);
  readonly projects$ = this.gitHubProjectsService.getProjects(this.username).pipe(
    catchError((error) => {
      console.error('Error fetching GitHub repositories', error);
      this.errorMessage.set('No se pudieron cargar los proyectos de GitHub. Inténtalo más tarde.');
      return of<ProjectItem[]>([]);
    }),
    finalize(() => this.isLoading.set(false))
  );

  constructor(private readonly gitHubProjectsService: GitHubProjectsService) {}

  readonly hasError = computed(() => this.errorMessage() !== null);
}
