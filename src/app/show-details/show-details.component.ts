import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  showAvailableDates: any = [];
  userSelectedDate: any;

  constructor(private route: ActivatedRoute, private bookingService: BookingService, private modalService: NgbModal,private router:Router) {

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

    // available dates for booking
    this.showCalendar();
  }

  bookingSeats(movieName: any, theatreName: any, showTime: any,i:any) {
    // Modal open for booking seats
    // const modalRef = this.modalService.open(TicketBookingComponent, { size: 'xl', backdrop: false });
    // modalRef.componentInstance.movieDetails = this.getAllTheaterList.movies.find((movie: any) => movie.movie_name == movieName);
    // modalRef.componentInstance.theatreName = theatreName;
    // modalRef.componentInstance.showTime = showTime;
    this.router.navigateByUrl(`/booking/${movieName}/${theatreName}/${i}/${this.userSelectedDate}`)
  }

  showCalendar(){
      let date:any = new Date();
      let numberOfDaysToAdd = 8;
      for(let i=0;i<=numberOfDaysToAdd;i++){
          let setDate:any = new Date(new Date().setDate(date.getDate() + i));
          this.showAvailableDates.push({ day: (setDate.toLocaleString('en-in',{ weekday: 'long'})).substring(0,3).toUpperCase(), date: setDate.getDate(), actualDate: new Date().setDate(date.getDate() + i), active: false})
      }
      this.showAvailableDates[0].active = true;
  }
  
  selectedDate(date:any,index:any){
    this.userSelectedDate = date.actualDate;
    this.showAvailableDates.forEach((date:any)=> date.active = false);
    this.showAvailableDates[index].active = true;
  }

  activeDate(index:any){
    return this.showAvailableDates[index].active;
  }
}
