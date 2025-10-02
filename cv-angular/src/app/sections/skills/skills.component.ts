import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataService } from '../../data/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  readonly skills: readonly string[];
  query = '';
  get filteredSkills() {
    const normalizedQuery = this.normalize(this.query);
    return this.skills.filter((skill) => this.normalize(skill).includes(normalizedQuery));
  }
  constructor(private readonly dataService: DataService) {
    this.skills = this.dataService.skills;
  }

  private normalize(value: string): string {
    return (value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
