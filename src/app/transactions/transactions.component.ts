import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions:any

  constructor(private service:ExpenseService){
    this.service.getTransanction().subscribe(data=>this.transactions=data)
  }
}