import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import { HomeServices } from '../home/services/home.service';
import { AccountDetails, Transaction } from '../../models/home/home.model';

@Component({ 
  selector: 'app-account-detail', 
  templateUrl: './account-detail.component.html', 
  styleUrls: ['./account-detail.component.less'], 
}) 
export class AccountDetailComponent implements OnInit { 
  accountAddress: string | null = null; 
  accountDetails!: AccountDetails ; 

  totalIncomingValue = 0;
  totalOutgoingValue = 0;
  totalFees = 0;
  transactionCount = 0;

  constructor(private route: ActivatedRoute, private _homeServices: HomeServices) { } 

  ngOnInit(): void { 
    this.accountAddress = this.route.snapshot.paramMap.get('address'); 
    if (this.accountAddress) {
      this.fetchAccountDetails(this.accountAddress); 
    } 
  } 

  fetchAccountDetails(address: string) {
    this._homeServices.getAccountDetails(address).subscribe(
      (response) => {
        if (response.ok && Array.isArray(response.result)) {
          this.accountDetails = {
            ok: response.ok,
            result: response.result.map((tx: Transaction) => ({
              ...tx, // Spread the transaction fields
            })),
          };
          console.log(this.accountDetails)
          // Analyze data and calculate
          this.analyzeData();
        } else {
          console.warn('Invalid response format', response);
        }
      },
      (error) => {
        console.error('Error fetching account details', error);
      }
    );
  }

  calculateBalance(): string {
    let incoming = 0;
    let outgoing = 0;

    this.accountDetails?.result.forEach(transaction => {
      incoming += +transaction.in_msg.value || 0; // Ensure safe fallback
      outgoing += transaction.out_msgs.reduce((sum, out_msg) => sum + (+out_msg.value || 0), 0); // Ensure safe fallback
    });

    return (incoming - outgoing).toString(); // Calculated balance
  }
  
  analyzeData(): void {
    if (this.accountDetails?.result) {
      this.transactionCount = this.accountDetails.result.length;

      this.accountDetails.result.forEach(transaction => {
        this.totalFees += +transaction.fee || 0; // Fallback to 0
        this.totalIncomingValue += +transaction.in_msg.value || 0; // Fallback to 0
        this.totalOutgoingValue += transaction.out_msgs.reduce((sum, out_msg) => sum + (+out_msg.value || 0), 0);
      });
    }
  }

  convertUtimeToReadableTime(utime: number): string {
    const date = new Date(utime * 1000); // Преобразование в миллисекунды
    return date.toUTCString(); // Возвращает время в формате UTC
  }


  getOutgoingValue(transaction: Transaction): string {
    const total = transaction.out_msgs?.reduce((sum, msg) => sum + (+msg.value || 0), 0) || 0;
    return total.toString(); // Return as string
  }
}
