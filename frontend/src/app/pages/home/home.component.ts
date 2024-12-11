import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; // Import Router
import { Destroyer } from '../../base/destroyer'; 
import {  HomeServices } from './services/home.service'; 
import { TopAccount } from '../../models/home/home.model';
 
@Component({ 
  selector: 'app-home', 
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.less'], 
}) 
export class HomeComponent extends Destroyer implements OnInit { 
  topAccounts: TopAccount[] = []; 
  displayedColumns: string[] = ['account', 'balance']; // Columns to display 
   
  constructor(private _homeServices: HomeServices, private router: Router) { 
    super(); 
  } 
 
  ngOnInit() { 
    this.fetchTopAccounts(); 
  } 
 
  fetchTopAccounts() { 
    this._homeServices.getTopAccounts().subscribe( 
      (accounts) => { 
        this.topAccounts = accounts; 
      }, 
      (error) => { 
        console.error('Error fetching top accounts', error); 
      } 
    ); 
  } 
 
  goToDetails(accountAddress: string) {
    // Navigate to the account details page
    this.router.navigate(['/account', accountAddress]);
  }
}
