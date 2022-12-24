import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent {
  bookedSeats: any = [];
  userMailId: string = 'arungkumar.10@gmail.com';

  constructor(private bookingService:BookingService){

  }

  createBookingSeats(movieDetails:any){
    let payLoad:any = {
        show_time: movieDetails.show_time,
        movie_name: movieDetails.movie_name,
        theatre_name: movieDetails.theatre_name,
        booked_seats: this.bookedSeats,
        date: new Date(),
        user_mail_id: this.userMailId
      }

    this.bookingService.bookMovieSeats(payLoad).subscribe((getBookingSeatsResponse)=>{
          
    })
  }
}
