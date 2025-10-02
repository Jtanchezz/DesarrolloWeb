import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly skills: readonly string[] = ['Angular', 'TypeScript', 'CSS'];
  readonly jobs: readonly string[] = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev'];
}
