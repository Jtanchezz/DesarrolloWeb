import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly skills: readonly string[] = [
    'Comunicación efectiva',
    'Trabajo en equipo',
    'Adaptabilidad',
    'Resolución de problemas',
    'Gestión del tiempo',
    'Pensamiento crítico',
    'Liderazgo',
    'Negociación',
    'Empatía',
    'Mentoría',
    'Creatividad',
    'Orientación a resultados'
  ];
  readonly jobs: readonly string[] = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev'];
}
