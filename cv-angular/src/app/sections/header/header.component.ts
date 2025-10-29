import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { contactLinks, navItems, profile } from '../../data/cv-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly profile = profile;
  readonly contactLinks = contactLinks;
  readonly navItems = navItems;
  readonly greeting = this.resolveGreeting();
  isDarkMode = false;
  showContact = true;
  private readonly document = inject(DOCUMENT);

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleContact(): void {
    this.showContact = !this.showContact;
  }

  private resolveGreeting(): string {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 12) {
      return 'Buenos días';
    }
    if (hour >= 12 && hour < 18) {
      return 'Buenas tardes';
    }
    return 'Buenas noches';
  }
}
