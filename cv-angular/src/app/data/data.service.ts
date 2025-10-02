import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly skills = ['Angular', 'TypeScript', 'CSS'];
  readonly jobs = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev'];
}
