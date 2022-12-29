import { Component, Input } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.scss']
})
export class TicketBookingComponent {
  bookedSeats: any = [];
  userMailId: string = 'arungkumar.10@gmail.com';
  @Input() movieDetails: any;
  @Input() theatreName: any;
  @Input() showTime: any;
  totalSeats: any = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.seatArrangement();
  }

  createBookingSeats() {
    let payLoad: any = {
      show_time: this.showTime,
      movie_name: this.movieDetails.movie_name,
      theatre_name: this.theatreName,
      booked_seats: this.bookedSeats,
      date: new Date(),
      user_mail_id: this.userMailId
    }
    // Create new seats
    this.bookingService.bookMovieSeats(payLoad).subscribe((getBookingSeatsResponse) => {

    })
  }

  seatSelection(seat: any) {
      if (seat.seat_status == 1 && this.bookedSeats.length <= 10) {
        seat.seat_status = 2;
        this.bookedSeats.push(seat.seat_arrangement_no);
      } else if (seat.seat_status == 2) {
        seat.seat_status = 1;
        this.bookedSeats.splice(this.bookedSeats.findIndex((seats: any) => seats.seat_arrangement_no == seat.seat_arrangement_no), 1);
      }
  }

  seatArrangement() {
    let noOfRows: any = ['A', 'B', 'C', 'D', 'E', 'F','G'];
    let totalSeatColumns: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    let seatsAlreadyBooked: any = ['B13', 'B14'];
    let unSeatsColumns:any = ['G1','G2',];
    noOfRows.forEach((rows: any, rowIndex: any) => {
      let tempTotalSeatColumn: any = [];
      let seatingFrequency: number = 0;
      let frequencyNumber: number = 0;
      totalSeatColumns.forEach((seat: any, index: any) => {
        frequencyNumber++;

        if (frequencyNumber <= 5) {
          seatingFrequency++;
          tempTotalSeatColumn.push({
            seat_no: seatingFrequency,
            seat_arrangement_no: String(noOfRows[rowIndex] + seat),
            seat_available: true,
            seat_status: seatsAlreadyBooked.find((seatNumber: any) => seatNumber == String(noOfRows[rowIndex] + seat)) != undefined ? 3 : 1
          })
        } else {
          tempTotalSeatColumn.push({
            seat_no: index + 1,
            seat_arrangement_no: String(noOfRows[rowIndex] + seat),
            seat_available: false,
            seat_status: 1
          })
          tempTotalSeatColumn.push({
            seat_no: index + 2,
            seat_arrangement_no: String(noOfRows[rowIndex] + seat),
            seat_available: false,
            seat_status: 1
          })
          frequencyNumber = 0;
        }

      })
      this.totalSeats.push({
        seatRowName: noOfRows[rowIndex],
        seats: tempTotalSeatColumn
      })
    })

  }

}

