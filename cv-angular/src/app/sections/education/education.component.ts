import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { educationHistory } from '../../data/cv-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  readonly items = educationHistory;
  readonly caption = 'Tabla de educación (años, institución y título)';
  readonly footnote = '* Información académica resumida';
}
