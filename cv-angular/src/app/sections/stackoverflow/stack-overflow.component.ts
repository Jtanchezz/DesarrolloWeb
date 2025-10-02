import { AsyncPipe, DatePipe, NgIf, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { StackOverflowProfile, StackOverflowService } from './stack-overflow.service';

@Component({
  selector: 'app-stack-overflow-card',
  standalone: true,
  imports: [AsyncPipe, DatePipe, DecimalPipe, NgIf],
  templateUrl: './stack-overflow.component.html',
  styleUrl: './stack-overflow.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackOverflowComponent {
  private readonly stackOverflowService = inject(StackOverflowService);
  private readonly userId = 31617061;

  readonly isLoading = signal(true);
  readonly error = signal<string | null>(null);
  readonly profile$ = this.stackOverflowService.getProfile(this.userId).pipe(
    catchError((error) => {
      console.error('Error fetching Stack Overflow profile', error);
      this.error.set('No se pudo cargar la información de Stack Overflow.');
      return of<StackOverflowProfile | null>(null);
    }),
    finalize(() => this.isLoading.set(false))
  );

  readonly hasError = computed(() => this.error() !== null);
}
