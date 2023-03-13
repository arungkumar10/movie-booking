import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../services/booking.service';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent {
  theatreDetails: any = [];
  theatreName!: string;
  getAllTheaterList: any = [];
  currentSelectedTheatreDetails: any = [];

  constructor(private route: ActivatedRoute, private bookingService: BookingService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((values: any) => {
      this.theatreName = values.params.theatre;
      let payLoad: any = {
        user_mail_id: "arungkumar.10@gmail.com"
      }

      // All the Movie Details
      this.bookingService.getAllMovieList(payLoad).subscribe((getTheaterListResponse: any) => {
        this.getAllTheaterList = getTheaterListResponse;
        this.currentSelectedTheatreDetails.push(getTheaterListResponse?.theatre?.find((theatre: any) => theatre.theatre_name == this.theatreName));
      })
    })
  }

  bookingSeats(movieName: any, theatreName: any, showTime: any) {
    // Modal open for booking seats
    const modalRef = this.modalService.open(TicketBookingComponent, { size: 'xl', backdrop: false });
    modalRef.componentInstance.movieDetails = this.getAllTheaterList.movies.find((movie: any) => movie.movie_name == movieName);
    modalRef.componentInstance.theatreName = theatreName;
    modalRef.componentInstance.showTime = showTime;
  }
}
