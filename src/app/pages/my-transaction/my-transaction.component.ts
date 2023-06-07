import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-transaction',
  templateUrl: './my-transaction.component.html',
  styleUrls: ['./my-transaction.component.scss']
})
export class MyTransactionComponent implements OnInit{
  
  constructor( private router: Router){
 
  }
  
  ngOnInit(): void{}
  
  async newTransaction() {
   await this.router.navigate(['new-transaction'])
  }
  }

