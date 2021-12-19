import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bookings } from '../models/bookings.model';
import { Observable, of } from 'rxjs';
import { DataStoreService } from './DataStoreService';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  apiUrl = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient, private datastore: DataStoreService) { }

  // getAllBookings() {
  //   return this._http.get<Bookings[]>(this.apiUrl + '/bookings/allBookings')
  // }

  getAllBookings() {
    return this.datastore.getSlot();
  }
  getBookings(email) {
    return this.datastore.getSlot();
  }

  // getBookings(email) {
  //   return this._http.get<Bookings[]>(this.apiUrl + '/bookings/getByUser/' + email);
  // }

  // addBooking(id,bookings):Observable<Bookings>{
  //   debugger;
  //   bookings.locationid = id;
  //   bookings.email = sessionStorage.getItem('email');
  //   console.log(bookings);
  //   return this._http.post<Bookings>(this.apiUrl+'/bookings/add', JSON.stringify(bookings), this.httpOptions ); 
  // }

  addBooking(id, bookings): Observable<boolean> {
    bookings.locationid = id;
    bookings.email = sessionStorage.getItem('email');
    console.log(bookings);
    return of(this.datastore.setSlot(bookings));
  }

  endBooking(bookingid) {
    return this._http.get<Boolean>(this.apiUrl + '/bookings/endBooking/' + bookingid);
  }

}
