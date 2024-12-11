import { HttpClient } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Observable } from 'rxjs';  
import { TopAccount, AccountDetails } from '../../../models/home/home.model';

@Injectable({ 
  providedIn: 'root', // Provide in root to make it a singleton 
}) 
export class HomeServices {  
  private baseUrl = 'https://toncenter.com/api/v3/topAccountsByBalance';  
  private detailsBaseUrl = 'https://toncenter.com/api/v2/getTransactions'; // Adjust this url as per your requirements 

  constructor(private httpClient: HttpClient) {}  

  // Fetch top accounts by balance 
  getTopAccounts(limit: number = 100, offset: number = 0): Observable<TopAccount[]> {  
    return this.httpClient.get<TopAccount[]>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);  
  } 

  // Fetch account details including transaction history 
  getAccountDetails(accountAddress: string, limit: number = 100, archival: boolean = true): Observable<AccountDetails> { 
    return this.httpClient.get<AccountDetails>(`${this.detailsBaseUrl}?address=${accountAddress}&limit=${limit}&archival=${archival}`); 
  } 
}