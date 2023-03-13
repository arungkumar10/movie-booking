import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  getAllMovieList(payLoad:any){
    return this.http.post(MOVIE_LIST_URL,payLoad);
  }

  bookMovieSeats(bookingDetails:any){
    return this.http.post(BOOKING_SEATS_URL,bookingDetails);
  }

  
}

const MOVIE_LIST_URL = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails";
const BOOKING_SEATS_URL = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails";
