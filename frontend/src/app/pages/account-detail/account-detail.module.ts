import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { AccountDetailComponent } from './account-detail.component';
import { AccountDetailRoutingModule } from './account-detail-rounting.module';
import { HomeServices } from '../home/services/home.service';


@NgModule({
  declarations: [
    AccountDetailComponent,
  ],
  imports: [
    MatTableModule,
    HttpClientModule,
    AccountDetailRoutingModule,
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  providers: [HomeServices],
})
export class AccountDetailModule { }