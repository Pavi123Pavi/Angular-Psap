import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/models/bookings.model';
import { BookingsService } from 'src/app/services/bookings.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private router: Router) {

  }

  public cardnumber: string = '';

  ngOnInit() {

  }
  back() {
    this.router.navigate(['/dashboard']);
  }
  paymentDone(card: any, cvv: any) {
    let cardLength = card.toString().length;
    let cvvLength = cvv.length;
    if (cardLength == 12 && cvvLength == 3) {
      console.log(card);
      alert("payment successful");
      // this.back();
    }
  }
}
