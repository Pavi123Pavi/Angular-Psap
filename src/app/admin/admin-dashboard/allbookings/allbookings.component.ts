import { Component, OnInit } from '@angular/core';
import { Bookings } from 'src/app/models/bookings.model';
import { BookingsService } from 'src/app/services/bookings.service';

@Component({
  selector: 'app-allbookings',
  templateUrl: './allbookings.component.html',
  styleUrls: ['./allbookings.component.css']
})
export class AllbookingsComponent implements OnInit {

  AllBookings$: Bookings[];

  constructor(private bookingsService: BookingsService) { }

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings() {
    const booking: Bookings[] = [];
    this.bookingsService.getAllBookings().subscribe(data => {
      if (!!data) {
        data?.forEach(x => {
          booking.push({
            bookingid: 1,
            cost: '',
            date: x.date,
            duration: x.duration,
            email: x.email,
            locationid: x.locationid,
            slotid: x.slotid,
            paid: 100,
            time: x.time,
            vehicle_no: x.vehicle_no,
            vehicle_type: x.vehicle_type
          });
        });
        this.AllBookings$ = booking;
      }
    });
  }

  // getAllBookings(){
  //   return this.bookingsService.getAllBookings()
  //   .subscribe(data => this.AllBookings$ = data)
  // }

}
