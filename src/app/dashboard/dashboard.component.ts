import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStoreService } from '../services/DataStoreService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  paymentAvailable: boolean = false;
  constructor(private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    // this.checkPayment();
    console.log("inside dashboard");
  }

  checkLogin(){ 
    if (sessionStorage.length == 0){
      this.router.navigate(['login']);
    }
  }
  checkPayment(){
    this.dataStore.getSlot().subscribe(data=>{
      if(!!data){
        this.paymentAvailable = true;
      }
    });
  }
}
