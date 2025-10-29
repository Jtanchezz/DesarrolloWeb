import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Experience {
  id: number;
  period: string;
  company: string;
  role: string;
}

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private readonly apiUrl = 'http://localhost:3001/experience';

  constructor(private readonly http: HttpClient) {}

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error al cargar la experiencia laboral', error);
        return throwError(() => new Error('No se pudo cargar la experiencia laboral'));
      })
    );
  }
}
