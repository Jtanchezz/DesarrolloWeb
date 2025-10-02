import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
  standalone: true
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    const normalized = (value ?? '').trim();
    if (!normalized) {
      return '';
    }
    return normalized.charAt(0).toUpperCase() + normalized.slice(1).toLowerCase();
  }
}
