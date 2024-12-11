import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private defaultTheme: string = 'dark'; 

  constructor() {
    this.theme = this.defaultTheme;
  }

  get theme(): string | null {
    return document.documentElement.getAttribute('theme');
  }

  set theme(name: string) {
    document.documentElement.setAttribute('theme', name);
  }
}
