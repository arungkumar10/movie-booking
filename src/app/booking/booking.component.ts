import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {
  bookedSeats: any = [];
  userMailId: string = 'arungkumar.10@gmail.com';
  movieDetails: any;
  theatreName: any;
  showTime: any;
  totalSeats: any = [];
  unSeatsColumns: any = [];
  movieName: any;
  showDate: any;
  getAllTheaterList: any = [];
  currentSelectedTheatreDetails: any = [];
  showActualTime: any;

  constructor(private bookingService: BookingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((values: any) => {
      this.movieName = values?.params?.movieName;
      this.theatreName = values?.params?.theatreName;
      this.showTime = values?.params?.showTime;
      this.showDate = new Date(Number(values?.params?.showDate));

      // All the Movie Details
      let payLoad: any = {
        user_mail_id: "arungkumar.10@gmail.com"
      }

      this.bookingService.getAllMovieList(payLoad).subscribe((getTheaterListResponse: any) => {
        this.getAllTheaterList = getTheaterListResponse;
        this.currentSelectedTheatreDetails.push(getTheaterListResponse?.theatre?.find((theatre: any) => theatre.theatre_name == this.theatreName));
        let showDetails: any = [this.currentSelectedTheatreDetails[0].show1_time, this.currentSelectedTheatreDetails[0].show2_time, this.currentSelectedTheatreDetails[0].show3_time, this.currentSelectedTheatreDetails[0].show4_time];
        this.showActualTime = showDetails[Number(this.showTime) - 1];
      })
    })

    this.seatArrangement();
  }

  createBookingSeats() {
    if (this.bookedSeats.length) {
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
        this.router.navigate(['/'], { queryParams: { showSuccessMessage: true } });
        const toastTrigger = document.getElementById('successMessage');
        if (toastTrigger) {
          toastTrigger.addEventListener('click', () => {
          })
        }
      })
    }
  }

  seatSelection(seat: any) {
    if (seat.seat_status == 1 && this.bookedSeats.length <= 10 && seat.seat_available && this.checkUnSeat(seat)) {
      seat.seat_status = 2;
      this.bookedSeats.push(seat.seat_arrangement_no);
    } else if (seat.seat_status == 2 && seat.seat_available && this.checkUnSeat(seat)) {
      seat.seat_status = 1;
      this.bookedSeats.splice(this.bookedSeats.findIndex((seats: any) => seats == seat.seat_arrangement_no), 1);
    }
  }

  seatArrangement() {
    let noOfRows: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let totalSeatColumns: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    let seatsAlreadyBooked: any = ['B13', 'B14'];
    this.unSeatsColumns = ['G1', 'G2', 'G15', 'G16', 'G17'];
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

  checkUnSeat(seat: any) {
    return this.unSeatsColumns.findIndex((x: any) => x == seat?.seat_arrangement_no) == -1;
  }

  dateFormat(date: any) {
    return `${date.toLocaleString('en-in', { weekday: 'long' }).substring(0, 3).toUpperCase()}, ${date.getDate()}  ${date.toLocaleString('en-in', { month: 'long' }).toUpperCase()} - ${this.showActualTime}`
  }


  navigateTo() {
    this.router.navigateByUrl('/');
  }
}