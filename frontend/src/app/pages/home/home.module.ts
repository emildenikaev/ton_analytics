import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HomeServices } from './services/home.service';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    MatTableModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    MatButtonModule
  ],
  providers: [HomeServices],

})
export class HomeModule { }