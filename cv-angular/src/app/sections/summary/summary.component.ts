import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { extraInfo, languages, projects, technologies } from '../../data/cv-data';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  readonly technologies = technologies;
  readonly languages = languages;
  readonly projects = projects;
  readonly extraInfo = extraInfo;

  printCv(): void {
    window.print();
  }
}
