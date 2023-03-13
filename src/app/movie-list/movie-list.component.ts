import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookingService } from '../services/booking.service';
import { TicketBookingComponent } from '../ticket-booking/ticket-booking.component';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
    getAllTheaterList: any = [];
    showNavigationArrows = false;
    showNavigationIndicators = false;
    showSuccessMessage: any = false;

    constructor(private bookingService: BookingService, private modalService: NgbModal, private config: NgbCarouselConfig, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.route.queryParams.subscribe((values: any) => {
            this.showSuccessMessage = values.showSuccessMessage;
        })
        this.config.animation = true;
        this.config.interval = 4000;
        let payLoad: any = {
            user_mail_id: "arungkumar.10@gmail.com"
        }

        // All the Movie Details
        this.bookingService.getAllMovieList(payLoad).subscribe((getTheaterListResponse: any) => {
            this.getAllTheaterList = getTheaterListResponse;
        })
    }

    ngAfterViewInit() {

    }

    bookingSeats(movieName: any, theatreName: any, showTime: any) {
        // Modal open for booking seats
        const modalRef = this.modalService.open(TicketBookingComponent, { size: 'xl', backdrop: false });
        modalRef.componentInstance.movieDetails = this.getAllTheaterList.movies.find((movie: any) => movie.movie_name == movieName);
        modalRef.componentInstance.theatreName = theatreName;
        modalRef.componentInstance.showTime = showTime;
    }

    recommendedMovies(moviesList: any) {
        return moviesList.reverse();
    }

    navigateToShowDetails(theatre: any) {
        this.router.navigate(['/show-deails/' + theatre.theatre_name]);
    }
}
