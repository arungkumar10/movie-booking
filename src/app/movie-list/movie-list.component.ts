import { Component } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  getAllTheaterList: any = [];

  constructor(private bookingService:BookingService){

  }

  ngOnInit(){
        let payLoad:any = {
            user_mail_id:"arungkumar.10@gmail.com"
        }
  

      this.bookingService.getAllMovieList(payLoad).subscribe((getTheaterListResponse:any)=>{
            this.getAllTheaterList = getTheaterListResponse;
      })
  }

  
  toggleAccordian(event:any, index:any) {
    const element = event.target;
    element.classList.toggle("active");
    if (this.getAllTheaterList?.theatre[index].isActive) {
      this.getAllTheaterList.theatre[index].isActive = false;
    } else {
      this.getAllTheaterList.theatre[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
}


const getAllTheaterList:any = {
  "theatre": [
      {
          "show2_time": "12:30 PM",
          "website": "http://gokulamcinemas.com/",
          "address": "795C, Old Sundar Theatre Complex,Trunk Road, Poonamallee, Rukmani Nagar, Poonamallee,Chennai, Tamil Nadu 600056",
          "show1_movie": "Love Today",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://lh3.googleusercontent.com/p/AF1QipMrgKxJIQkJKXyvOoBjqXuPpVYqupxwMMOjuQtU=s1360-w1360-h1020",
          "customer_rating": "4.8",
          "show2_movie": "777 Charlie",
          "theatre_name": "Gokulam Cinemas",
          "show4_movie": "777 Charlie",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Love Today"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://www.jazzcinemas.com/",
          "address": "Phoenix Market City, No. 142, 2nd Floor, Velachery Rd, Indira Gandhi Nagar, Velachery, Chennai, Tamil Nadu 600042",
          "show1_movie": "Ponniyin Selvan: Part I",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a5267623f4a1bdd%3A0xc691108f18ef0793!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPlP4t0ZR8ToQnszeBHtqCpoByLIGOL07UOD-IT%3Dw260-h175-n-k-no!5schennai%20theatres%20list%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPlP4t0ZR8ToQnszeBHtqCpoByLIGOL07UOD-IT&hl=en&sa=X&ved=2ahUKEwjRmJvBzYj8AhWcZWwGHYcABQMQ7ZgBKAB6BAgeEAI#",
          "customer_rating": "4.3",
          "show2_movie": "Sita Ramam",
          "theatre_name": "Jazz Cinemas LUXE",
          "show4_movie": "Sita Ramam",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Ponniyin Selvan: Part I"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://www.spicinemas.in/",
          "address": "8, Thiruvika Rd, Peters Colony, Royapettah, Chennai, Tamil Nadu 600014",
          "show1_movie": "Major",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a52679f1ec75045%3A0xf51a070494ff05d2!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP_ebPKZhES7GgOIWaX6ER2OBtk--uOJKrDW28%3Dw260-h175-n-k-no!5schennai%20theatres%20list%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipP_ebPKZhES7GgOIWaX6ER2OBtk--uOJKrDW28&hl=en&sa=X&ved=2ahUKEwjzute0zoj8AhV4TGwGHbJsAeUQ7ZgBKAB6BAgaEAI#",
          "customer_rating": "4.4",
          "show2_movie": "Rocketry: The Nambi Effect",
          "theatre_name": "Sathyam Cinemas",
          "show4_movie": "Rocketry: The Nambi Effect",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Major"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://www.spicinemas.in/",
          "address": "25, Mamatha Complex, 5th Floor, Whites Rd, Royapettah, Chennai, Tamil Nadu 600014",
          "show1_movie": "Kantara",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a52663c98e85407%3A0xdf56b9a724defe80!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNu-dCmh8VyICAl3ond6NudMmaS8fO_a6Zndm7U%3Dw260-h175-n-k-no!5ssathyam%20cinemas%20website%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNu-dCmh8VyICAl3ond6NudMmaS8fO_a6Zndm7U&hl=en&sa=X&ved=2ahUKEwjG4raKz4j8AhXyUGwGHUxfApUQ7ZgBKAB6BAgVEAI#",
          "customer_rating": "4.4",
          "show2_movie": "Vikram",
          "theatre_name": "SPI Cinemas Office",
          "show4_movie": "Vikram",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Kantara"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://www.spicinemas.in/",
          "address": "60, Lattice Brg Rd, Ranganatha Puram, Adyar, Chennai, Tamil Nadu 600113",
          "show1_movie": "K.G.F: Chapter 2",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a5267c7ea558d47%3A0xe79a4f27c52f8c8b!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPoW2DihW6pkfKcIcMito05ilAN_r0EFrI6753I%3Dw130-h87-n-k-no!5sSathyam%20Cinemas%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPoW2DihW6pkfKcIcMito05ilAN_r0EFrI6753I&hl=en&sa=X&ved=2ahUKEwiZoMTiz4j8AhUMRmwGHeURCz4Q7ZgBKAF6BAgVEAM#",
          "customer_rating": "4.2",
          "show2_movie": "The Kashmir Files",
          "theatre_name": "PVR SPI S2 Theyagaraja Chennai",
          "show4_movie": "The Kashmir Files",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "K.G.F: Chapter 2"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://shivasakthicinemas.com/",
          "address": "No - 1, Moorthy Nagar, Padi, Chennai, Tamil Nadu 600050",
          "show1_movie": "Godfather",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a5267ed1094895f%3A0x928a5b7db01b7adf!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPyHkvoyzLTxTQqc5spuU8frwsXNZqeXzhaGfYn%3Dw260-h175-n-k-no!5schennai%20theatres%20list%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPyHkvoyzLTxTQqc5spuU8frwsXNZqeXzhaGfYn&hl=en&sa=X&ved=2ahUKEwjz9fmh04j8AhXhRmwGHba6DSQQ7ZgBKAB6BAgUEAI#",
          "customer_rating": "4.3",
          "show2_movie": "Nitham Oru Vaanam",
          "theatre_name": "Sivasakthi Cinemas",
          "show4_movie": "Nitham Oru Vaanam",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Godfather"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://www.inoxmovies.com/",
          "address": "5, Muthu Mohamed St, Puzhuthivakkam, Madipakkam, Chennai, Tamil Nadu 600091",
          "show1_movie": "Sardar",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a525c1881a96f8d%3A0x7b31ef0bed4ec814!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOEqmJzbFM7IeVXEpxh_YsKr08eXhru-38p1rou%3Dw130-h87-n-k-no!5sKumaran%20Cinemas%22%2C%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOEqmJzbFM7IeVXEpxh_YsKr08eXhru-38p1rou&hl=en&sa=X&ved=2ahUKEwjEvuSo1Yj8AhWSS2wGHTPcCRYQ7ZgBKAJ6BAgJEAQ#",
          "customer_rating": "2.3",
          "show2_movie": "Jai Bhim",
          "theatre_name": "Inox Theatre",
          "show4_movie": "Jai Bhim",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Sardar"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://www.xtracut.com/portfolio/sb-cinemas/",
          "address": "25, Amman Koil St, Indhira Nagar, Kumananchavadi, Chennai, Tamil Nadu 600056",
          "show1_movie": "Thiruchitrambalam",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a525c1881a96f8d%3A0x7b31ef0bed4ec814!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOEqmJzbFM7IeVXEpxh_YsKr08eXhru-38p1rou%3Dw130-h87-n-k-no!5sKumaran%20Cinemas%22%2C%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOEqmJzbFM7IeVXEpxh_YsKr08eXhru-38p1rou&hl=en&sa=X&ved=2ahUKEwjEvuSo1Yj8AhWSS2wGHTPcCRYQ7ZgBKAJ6BAgJEAQ#",
          "customer_rating": "4.3",
          "show2_movie": "Coffee with Kadhal",
          "theatre_name": "SB CINEMAS",
          "show4_movie": "Coffee with Kadhal",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Thiruchitrambalam"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://www.agscinemas.com/",
          "address": "No. 24, 1, Gopathi Narayanaswami Chetty Rd, opp.to barathidasan hospital, Parthasarathi Puram, T. Nagar, Chennai, Tamil Nadu 600017",
          "show1_movie": "Master",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a526645665d6cbb%3A0x79e5d9aab84489a4!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMLY7WelxsDuzZrNAglAhvPPsfmLLQgSzqJIeuT%3Dw260-h175-n-k-no!5schennai%20theatres%20list%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMLY7WelxsDuzZrNAglAhvPPsfmLLQgSzqJIeuT&hl=en&sa=X&ved=2ahUKEwjYkY751Yj8AhVER2wGHeGnDyMQ7ZgBKAB6BAgTEAI#",
          "customer_rating": "4.1",
          "show2_movie": "Vendhu Thanindhathu Kaadu",
          "theatre_name": "AGS Cinemas T Nagar",
          "show4_movie": "Vendhu Thanindhathu Kaadu",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "Master"
      },
      {
          "show2_time": "12:30 PM",
          "website": "https://kasitheatre.com/",
          "address": "60, Pillaiyar Koil St, Kasi Estate, West Jafferkhanpet, Chennai, Tamil Nadu 600083",
          "show1_movie": "RRR",
          "show4_time": "6:30 PM",
          "thumbnail_url": "https://www.google.com/maps/uv?pb=!1s0x3a5267c37ba78717%3A0xaa33d93206b34775!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMZbn6k8Vukx8Y2TqY35kV71-A6HmHDOsSteLHy%3Dw260-h175-n-k-no!5schennai%20theatres%20list%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMZbn6k8Vukx8Y2TqY35kV71-A6HmHDOsSteLHy&hl=en&sa=X&ved=2ahUKEwiop77P0oj8AhXlV2wGHUPZAtMQ7ZgBKAB6BAgZEAI#",
          "customer_rating": "4.2",
          "show2_movie": "Pushpa: The Rise - Part 1",
          "theatre_name": "Kasi Talkies",
          "show4_movie": "Pushpa: The Rise - Part 1",
          "show1_time": "9:30 AM",
          "show3_time": "3:00 PM",
          "show3_movie": "RRR"
      }
  ],
  "movies": [
      {
          "release_date": "November 4, 2022",
          "running_time": "2 hours 34 minutes",
          "language": "Tamil",
          "movie_name": "Love Today",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg",
          "imdb_rating": "8.4",
          "tags": "Comedy,Drama,Romance"
      },
      {
          "release_date": "June 10, 2022",
          "running_time": "2 hours 44 minutes",
          "language": "Kannada",
          "movie_name": "777 Charlie",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/1/19/777_Charlie_official_poster.jpg",
          "imdb_rating": "8.9",
          "tags": "Adventure,Comedy,Drama"
      },
      {
          "release_date": "September 30, 2022",
          "running_time": "2 hours 47 minutes",
          "language": "Tamil",
          "movie_name": "Ponniyin Selvan: Part I",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg",
          "imdb_rating": "7.9",
          "tags": "Action,Drama,Family"
      },
      {
          "release_date": "August 5, 2022",
          "running_time": "2 hours 43 minutes",
          "language": "Tamil",
          "movie_name": "Sita Ramam",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/1/1d/Sita_Ramam.jpg",
          "imdb_rating": "8.6",
          "tags": "Action,Drama,Mystery"
      },
      {
          "release_date": "June 3, 2022",
          "running_time": "2 hours 30 minutes",
          "language": "Telugu,Hindi",
          "movie_name": "Major",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/e/ee/Major_The_Film.jpg",
          "imdb_rating": "8.2",
          "tags": "Action,Biography,Drama"
      },
      {
          "release_date": "July 1, 2022",
          "running_time": "2 hours 37 minutes",
          "language": "HindiTamilEnglish",
          "movie_name": "Rocketry: The Nambi Effect",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/2/2f/Rocketry_The_Nambi_Effect.jpg",
          "imdb_rating": "8.8",
          "tags": "Biography,Drama"
      },
      {
          "release_date": "September 30, 2022",
          "running_time": "2 hours 28 minutes",
          "language": "Καντάρα",
          "movie_name": "Kantara",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/Kantara_poster.jpeg/220px-Kantara_poster.jpeg",
          "imdb_rating": "8.5",
          "tags": "Action,Adventure,Drama"
      },
      {
          "release_date": "June 3, 2022",
          "running_time": "2 hours 55 minutes",
          "language": "TamilHindiTeluguKannadaMalayalam",
          "movie_name": "Vikram",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
          "imdb_rating": "8.4",
          "tags": "Action,Crime,Thriller"
      },
      {
          "release_date": "April 13, 2022",
          "running_time": "2 hours 48 minutes",
          "language": "Kannada,Hindi",
          "movie_name": "K.G.F: Chapter 2",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg",
          "imdb_rating": "8.3",
          "tags": "Action,Crime,Drama"
      },
      {
          "release_date": "March 11, 2022",
          "running_time": "2 hours 43 minutes",
          "language": "KannadaHindi",
          "movie_name": "The Kashmir Files",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/d/d4/The_Kashmir_Files_poster.jpg",
          "imdb_rating": "8.3",
          "tags": "Drama"
      },
      {
          "release_date": "March 11, 2022",
          "running_time": "3 hours 7 minutes",
          "language": "Telugu,English",
          "movie_name": "RRR",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
          "imdb_rating": "7.9",
          "tags": "Action,Drama"
      },
      {
          "release_date": "December 17, 2021",
          "running_time": "2 hours 59 minutes",
          "language": "TeluguHindiTamilKannadaMalayalam",
          "movie_name": "Pushpa: The Rise - Part 1",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg",
          "imdb_rating": "7.6",
          "tags": "Action,Crime,Drama"
      },
      {
          "release_date": "November 2, 2021",
          "running_time": "2 hours 37 minutes",
          "language": "TamilKannadaMalayalamTeluguHindi",
          "movie_name": "Godfather",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/4/4b/Godfather_Telugu_poster.jpeg",
          "imdb_rating": "5.4",
          "tags": "Action,Crime,Drama"
      },
      {
          "release_date": "November 2, 2021",
          "running_time": "2 hours 26 minutes",
          "language": "TamilTelegu",
          "movie_name": "Nitham Oru Vaanam",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/2/2e/Nitham_Oru_Vaanam.jpg",
          "imdb_rating": "7.4",
          "tags": "Drama"
      },
      {
          "release_date": "November 18, 2021",
          "running_time": "2 hours 44 minutes",
          "language": "Tamil",
          "movie_name": "Jai Bhim",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/a/ad/Jai_Bhim_film_poster.jpg",
          "imdb_rating": "8.8",
          "tags": "Crime,Drama,Mystery"
      },
      {
          "release_date": "November 1, 2022",
          "running_time": "2 hours 46 minutes",
          "language": "Tamil",
          "movie_name": "Sardar",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/8/80/Sardar_2022_poster.jpg",
          "imdb_rating": "7.6",
          "tags": "Action,Drama"
      },
      {
          "release_date": "August 18, 2022",
          "running_time": "2 hours 11 minutes",
          "language": "Tamil",
          "movie_name": "Thiruchitrambalam",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/2/24/Thiruchitrambalam_poster.jpg",
          "imdb_rating": "7.9",
          "tags": "Comedy,Drama,Musical"
      },
      {
          "release_date": "November 4, 2022",
          "running_time": "2 hours 24 minutes",
          "language": "Tamil",
          "movie_name": "Coffee with Kadhal",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/0/05/Coffee_With_Kadhal_poster.jpg",
          "imdb_rating": "4.6",
          "tags": "Comedy,Romance"
      },
      {
          "release_date": "January 13, 2021",
          "running_time": "2 hours 57 minutes",
          "language": "Tamil",
          "movie_name": "Master",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/5/53/Master_2021_poster.jpg",
          "imdb_rating": "7.3",
          "tags": "Action,Thriller"
      },
      {
          "release_date": "September 15, 2022",
          "running_time": "2 hours 57 minutes",
          "language": "Tamil",
          "movie_name": "Vendhu Thanindhathu Kaadu",
          "thumbnail_url": "https://upload.wikimedia.org/wikipedia/en/e/e3/Vendhu_Thanindhathu_Kaadu.jpg",
          "imdb_rating": "7.4",
          "tags": "Action,Crime,Drama"
      }
  ]
}