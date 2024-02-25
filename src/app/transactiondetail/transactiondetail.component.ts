import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-transactiondetail',
  templateUrl: './transactiondetail.component.html',
  styleUrls: ['./transactiondetail.component.css']
})
export class TransactiondetailComponent {
  id:any
  transaction:any
  constructor(private route:ActivatedRoute, private service:ExpenseService){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id);

    this.service.retrieveTransanction(this.id).subscribe(data=>this.transaction=data)
    
  }

}
