import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from '../shared/services/theme.service';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './pages/home/home.module';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeModule, 
    RouterOutlet, RouterOutlet, RouterModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  enabled = false; // Статус текущей темы
  menuOpen = false; // Статус открытия меню

  constructor(private _themeService: ThemeService) {
    this.enabled = this._themeService.theme === 'dark';
  }


  list = [
    { name: 'Файлы', isActive: false, url: '/upload', png: 'downloading' },
  ];

  changeTheme() {
    this.enabled = !this.enabled;
    this._themeService.theme = this.enabled ? 'dark' : 'default';
    document.body.classList.toggle('dark-mode', this.enabled);
    document.body.classList.toggle('light-mode', !this.enabled);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
