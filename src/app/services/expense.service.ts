import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  baseUrl:string="http://127.0.0.1:8000/api/v1/transactions/"

  refreshRequired=new Subject();

  constructor(private http:HttpClient) { }

  // service for listing all transanctions
  getTransanction(){
    return this.http.get(this.baseUrl)
  }

  // service for retrieving specific transaction
  retrieveTransanction(id:number){
    return this.http.get(`${this.baseUrl}${id}/`)
  }

  // service for create new transaction
  createTransaction(data:any){
    return this.http.post(this.baseUrl,data).pipe(tap(data=>this.refreshRequired.next(true)))
  }

  // service for update new transaction
  updateTransaction(id:number,data:any){
    return this.http.put(`${this.baseUrl}${id}`,data)
  }

  // remove transaction
  removeTransaction(id:number){
    return this.http.delete(`${this.baseUrl}${id}`)
  }
}
