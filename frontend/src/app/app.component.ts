import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ThemeService } from '../shared/services/theme.service';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './pages/home/home.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; // For pagination (optional)
import { MatSortModule } from '@angular/material/sort'; // For sorting (optional)
import { AccountDetailModule } from './pages/account-detail/account-detail.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,    
    FormsModule, ReactiveFormsModule, HomeModule, 
    AccountDetailModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterOutlet, RouterOutlet, RouterModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  enabled = false; 
  menuOpen = false;

  constructor(private _themeService: ThemeService) {
    this.enabled = this._themeService.theme === 'dark';
  }


  list = [
    { name: 'Upload', isActive: false, url: '/upload', png: 'downloading' },
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
