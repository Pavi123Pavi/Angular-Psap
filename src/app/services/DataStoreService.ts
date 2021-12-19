import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Bookings } from '../models/bookings.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  bookingList: any[] = [];

  setSlot(bookings: any): boolean {
    let inserted = false;
    if (this.validateExistingCar(bookings)) {
      inserted = true;
      this.bookingList.push(bookings);

      
    }
    else {
      inserted = false;
      alert("Car already exists");
    }
    return inserted;
  }
  getSlot(): Observable<any[]> {
    return of(this.bookingList);
  }

  private validateExistingCar(bookings: any): boolean {
    let a: boolean = true;
    this.bookingList.forEach(x => {
      if (x.vehicle_no == bookings.vehicle_no) {
        a = false;
      }
    });
    return a;
  }
}
